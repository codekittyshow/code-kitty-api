import {Request , Response} from 'express';
import * as mongodb from 'mongodb';
import {MongoHelper} from '../../config/mongodb.config';

const getCollection = () => {
    return MongoHelper.client.db("CodeKitty").collection("user")
}

export default class UserController { 
    public addUser = async (req: Request, res: Response): Promise<any> => {
        const collection = getCollection();
        const user = req.body;
        try {
            const result = await collection.insertOne(user);
        } catch (error) {
            
        }
       

    }

}