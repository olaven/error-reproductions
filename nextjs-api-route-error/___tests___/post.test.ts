import handler from "../pages/api/posts/[id].ts";
import fetch from "isomorphic-unfetch";
import { setupServer, teardownServer } from "./testutils";

describe("Testing the post endpoint", () => {

    let server; 
    let url;

    beforeAll(async () => {

        [server, url] = await setupServer(handler, "/api/posts/"); 
    });

    afterAll(async () => {

        await teardownServer();
    });

    test("Does return post", async () => {

        const response = await fetch(`${url}/POST_ID`); 
        expect(response.status).toEqual(200); 
        
        const object = await response.json(); 
        expect(object.text).toBeDefined(); //DEFINED  
        expect(object.id).toBeDefined();  //NOT DEFINED (expected to return POST_ID from above);
    });
})