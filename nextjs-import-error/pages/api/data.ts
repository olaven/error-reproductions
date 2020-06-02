import {getRepository} from "../../database/GetRepository";


export default async function dataHandler (request, response) {

    const repository = await getRepository();
    const data = await repository.find();
    
    response.json(data);
}