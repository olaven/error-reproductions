import "reflect-metadata"
import { MyEntity } from "./MyEntity"
import {createConnection, getConnectionManager, getConnectionOptions} from "typeorm";

const connect = async () => {

    const name = "default"
    const options = await getConnectionOptions(name);
    const manager = getConnectionManager();

    if (manager.has(name))
        return manager.get(name);

    return await createConnection(options);
};

export const getRepository = async () => {

    const connection = await connect(); 
    return connection.getRepository(MyEntity);
}