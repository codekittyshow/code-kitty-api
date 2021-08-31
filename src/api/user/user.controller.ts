import {Request , Response} from 'express';
import * as mongodb from 'mongodb';
import {MongoHelper} from '../../config/mongodb.config';


const getCollection = async() => {
    return (await MongoHelper.connect()).db("CodeKitty").collection("user")
}

const addUser = async (req: Request, res: Response): Promise<any> => {
        const collection = await getCollection();
        const user = req.body;
        try {
            const result = await collection.insertOne(user);
        } catch (error) {
            
        }
}

export default {
    addUser
}