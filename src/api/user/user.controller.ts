import { Request, Response } from "express";
import * as mongodb from "mongodb";
import { MongoHelper } from "../../config/mongodb.config";
import User from "./user.class";
import Config from "../../config/config";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import * as httpStatus from "http-status";
import * as responses from "../../helpers/responses.handler";

const getCollection = () => {
  return MongoHelper.client
    .db(Config.DB_NAME)
    .collection(Config.USER_COLLECTION_NAME);
};

export default class UserController {
  public addUser = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection = getCollection();
    const userData = new User(requestData);
    try {
      const { uid } = requestData;
      const user = await collection.findOne({ uid });

      if (user) {
        res
          .status(httpStatus.OK)
          .send(responses.success(ErrorCodes.USER_ALREADY_EXISTS));
        res.end();
        return;
      }
      await collection.insertOne(userData);

      res
        .status(httpStatus.CREATED)
        .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_ADDED));
      res.end();
    } catch (e) {
      console.error(e.message);
      res.send(
        responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
      );
    }
  };

  public getUser = async (req: Request, res: Response): Promise<any> => {
    const collection = getCollection();

    try {
      const user = await collection.findOne({
        uid: req.params.id,
      });

      res.send(
        responses.successWithPayload(
          SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
          user
        )
      );
    } catch (e) {
      console.error(e.message);
      res.send(
        responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
      );
    }
  };

  public getAllUsers = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();

    try {
      const data = await collection.find().toArray();

      res.send(
        responses.successWithPayload(
          SuccessCodes.SUCCESSFULLY_DATA_RETRIVED,
          data
        )
      );
    } catch (e) {
      console.error(e.message);
      res.send(
        responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
      );
    }
  };

  public updateUser = async (req: Request, res: Response): Promise<any> => {
    const { uid, displayName, email, photoURL } = req.body;

    const collection: any = getCollection();

    try {
      await collection.findOneAndUpdate(
        { uid: new mongodb.ObjectId(uid) },
        { $set: { displayName, email, photoURL } }
      );

      res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_UPDATED));
    } catch (e) {
      console.error(e.message);
      res.send(
        responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
      );
    }
  };

  public deleteUser = async (req: Request, res: Response): Promise<any> => {
    const id = req.params.id;
    const collection: any = getCollection();

    try {
      await collection.deleteOne({ uid: new mongodb.ObjectId(id) });
      res.send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_DELETED));
    } catch (e) {
      console.error(e.message);
      res.send(
        responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
      );
    }
  };
}
