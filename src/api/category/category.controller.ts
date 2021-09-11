import { Request , Response} from 'express';
import { ObjectId } from 'mongodb';
import { MongoHelper } from "../../config/mongodb.config";
import Config from "../../config/config";
import Category from "./category.class";
import ErrorCodes from "../../config/error.codes";
import SuccessCodes from "../../config/success.codes";
import * as httpStatus from "http-status";
import * as responses from "../../helpers/responses.handler";

const getCollection = () => {
    return MongoHelper.client
        .db(Config.DB_NAME)
        .collection(Config.CATEGORY_COLLECTION_NAME);
};

export default class CategoryController {
    /**
     * Get all categories
     * URL [GET] /
     *
     * @param req
     * @param res
     */
    public getAllCategories = async (req: Request, res: Response): Promise<any> => {

        const collection = getCollection();

        try {
            const result = await collection.find().toArray();
            res
                .status(httpStatus.CREATED)
                .send(result)
                .end();
        } catch (e) {
            res.send(
                responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
            );
        }
    }

    /**
     * Get category by id
     * URL [GET] /:id
     *
     * @param req
     * @param res
     */
    public getCategoryById = async (req: Request, res: Response): Promise<any> => {

        const id = req.params.id;
        const collection = getCollection();
        const filter = { _id: new ObjectId(id) };

        try {
            const result = await collection.findOne(filter);

            if (!result) {
                res
                    .status(httpStatus.NOT_FOUND)
                    .send({})
                    .end();
            }

            res
                .status(httpStatus.CREATED)
                .send(result)
                .end();
        } catch (e) {
            res.send(
                responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
            );
        }
    }

    /**
     * Create new category
     * URL [POST] /:id
     *
     * @param req
     * @param res
     */
    public addCategory = async (req: Request, res: Response): Promise<any> => {

        const requestData = req.body;
        const collection = getCollection();
        const category = new Category(requestData);

        try {
            const result = await collection.insertOne(category);

            res
                .status(httpStatus.CREATED)
                .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_ADDED))
                .end();
        } catch (e) {
            res.send(
                responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
            );
        }
    }

    /**
     * Update a category
     * URL [POST] /:id
     *
     * @param req
     * @param res
     */
    public updateCategory = async (req: Request, res: Response): Promise<any> => {

        const requestData = req.body;
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const collection = getCollection();

        requestData._id = filter._id;
        const category = new Category(requestData);

        try {
            const result = await collection.findOneAndUpdate(filter, category);

            res
                .status(httpStatus.CREATED)
                .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_UPDATED))
                .end();
        } catch (e) {
            console.log(e)
            res.send(
                responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
            );
        }
    }

    /**
     * Delete a category
     * URL [POST] /:id
     *
     * @param req
     * @param res
     */
    public deleteCategory = async (req: Request, res: Response): Promise<any> => {

        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const collection = getCollection();

        try {
            const result = await collection.deleteOne(filter);

            res
                .status(httpStatus.CREATED)
                .send(responses.success(SuccessCodes.SUCCESSFULLY_DATA_DELETED))
                .end();
        } catch (e) {
            res.send(
                responses.failed(ErrorCodes.INTERNAL_ERROR, httpStatus.BAD_REQUEST)
            );
        }
    }
}