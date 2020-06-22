import { NextApiRequest, NextApiResponse } from "next";

const fetchTodo = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (response.status === 200) {

        const todo = await (await response).json();
        return todo;
    }

    console.warn(`received ${response.status} when fetching todo`);
    return null;
}

const handler = async (request: NextApiRequest, response: NextApiResponse) => {

    // endpoint making request 
    const todo = await fetchTodo();
    response.json(todo);
};

export default handler;

