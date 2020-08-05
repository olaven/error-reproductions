const { PHASE_PRODUCTION_SERVER } =
    process.env.NODE_ENV === "development"
        ? require("next/constants")
        : require("next-server/constants");


module.exports = (phase, { defaultConfig }) => {

    if (phase === PHASE_PRODUCTION_SERVER) {
        return {
            /* production only config */
        };
    }


    const webpack = require('webpack');
    const Dotenv = require('dotenv-webpack');
    const path = require("path");

    //NOTE: workaround for Firebase in Zeit Now (https://github.com/zeit/next.js/issues/6073)
    const withAssetRelocator = (nextConfig = {}) => {


        return Object.assign({}, nextConfig, {
            webpack(config, options) {
                const { isServer } = options;

                if (isServer) {
                    config.node = Object.assign({}, config.node, {
                        __dirname: false,
                        __filename: false,
                    });

                    config.module.rules.unshift({
                        test: /\.(m?js|node)$/,
                        parser: { amd: false },
                        use: {
                            loader: '@zeit/webpack-asset-relocator-loader',
                            options: {
                                outputAssetBase: 'assets',
                                existingAssetNames: [],
                                wrapperCompatibility: true,
                                escapeNonAnalyzableRequires: true,
                            },
                        },
                    })
                }

                //Workaround for @sendgrid/mail https://github.com/sendgrid/sendgrid-nodejs/issues/952
                config.node = {
                    ...config.node,
                    net: 'empty',
                    fs: 'empty',
                    tls: 'empty'
                };

                if (typeof nextConfig.webpack === 'function') {
                    return nextConfig.webpack(config, options)
                }

                return config
            },
        })
    };
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
    const withSass = require('@zeit/next-sass');
    const withTypescript = require("@zeit/next-typescript");

    return withSass(withTypescript(withAssetRelocator({

        webpack(config, options) {
            // Do not run type checking twice:
            if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

            // adding dotenv
            config.plugins.push(new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            }));

            //NOTE: forwarding process.env.NODE_ENV to client (see @ericf´s comment here: https://github.com/zeit/next.js/issues/159)
            config.plugins.push(new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.PROD_DEV': JSON.stringify(process.env.PROD_DEV)
            }));


            return config
        },
        target: "serverless"
    })));
};
