# Crashing on vercel 
## Environment variables 
```
AUTH0_CLIENT_ID=<your_client_id> 
AUTH0_CLIENT_SECRET=<your_client_secret>
SESSION_COOKIE_SECRET=<some_secret_value>

REDIRECT_URI=<your_deployment_domain>
POST_LOGOUT_REDIRECT_URI=<your_deployment_domain>/api/auth/callback
```
## Error
```
2020-06-22T12:33:13.413Z	undefined	ERROR	Uncaught Exception 	{"errorType":"Runtime.ImportModuleError","errorMessage":"Error: Cannot find module 'next/dist/next-server/server/node-polyfill-fetch'\nRequire stack:\n- /var/task/.next/serverless/pages/api/auth/login.js\n- /var/task/now__launcher.js\n- /var/runtime/UserFunction.js\n- /var/runtime/index.js","stack":["Runtime.ImportModuleError: Error: Cannot find module 'next/dist/next-server/server/node-polyfill-fetch'","Require stack:","- /var/task/.next/serverless/pages/api/auth/login.js","- /var/task/now__launcher.js","- /var/runtime/UserFunction.js","- /var/runtime/index.js","    at _loadUserApp (/var/runtime/UserFunction.js:100:13)","    at Object.module.exports.load (/var/runtime/UserFunction.js:140:17)","    at Object.<anonymous> (/var/runtime/index.js:43:30)","    at Module._compile (internal/modules/cjs/loader.js:1133:30)","    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1153:10)","    at Module.load (internal/modules/cjs/loader.js:977:32)","    at Function.Module._load (internal/modules/cjs/loader.js:877:14)","    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)","    at internal/main/run_main_module.js:18:47"]}Unknown application error occurredRuntime.ImportModuleError
```