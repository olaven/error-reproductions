import { getRepository } from "../../database/getRepository";

export default async function dataHandler (request, response) {

    const repositoy = await getRepository(); 
    const data = await repository.find().getMany();
    
    response.json(data);
}