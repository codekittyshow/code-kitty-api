import { Request, Response } from "express";

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
    const user = new User(requestData);
    try {
      const result = await collection.insertOne(user);

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
}
