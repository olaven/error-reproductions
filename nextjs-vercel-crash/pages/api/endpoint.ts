import { NextApiRequest, NextApiResponse } from "next";

const handler = (request: NextApiRequest, response: NextApiResponse) => {

    response.send("Value from endpoint :D")
};

export default handler;

