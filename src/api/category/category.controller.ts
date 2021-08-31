import { Request , Response} from 'express';
import ICategory from './category.interface';
import CategoryService from './category.service';
import { ObjectId } from 'mongodb';

/**
 * Get all categories
 * URL [GET] /
 * 
 * @param req 
 * @param res 
 */
const getAllCategories = async (req: Request, res: Response): Promise<any> => {
    try {
        CategoryService.getCategories()
            .then((documents) => res.json(documents))
            .catch((error) => res.json(error));
    } catch (error) {
        res.json({
            status: 'failed',
            error: error
        })
    }
}

/**
 * Get category by id
 * URL [GET] /:id
 * 
 * @param req 
 * @param res 
 */
const getCategoryById = async (req: Request, res: Response): Promise<any> => {
    try {
        CategoryService.getCategories(req.params.id)
            .then((document) => res.json(document))
            .catch((error) => res.json(error));
    } catch (error) {
        res.json({
            status: 'failed',
            error: error
        })
    }
}

/**
 * Create new category
 * URL [POST] /:id
 * 
 * @param req 
 * @param res 
 */
const addCategory = async (req: Request, res: Response): Promise<any> => {
    try {
        const category: ICategory = req.body;
        category._id = new ObjectId();
        CategoryService.insertCategory(category)
            .then(() => {
                res.json({
                    status: 'success'
                });
            })
            .catch((error) => {
                res.json({
                    status: 'failed',
                    error: error
                })
            })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error
        })
    }
}

/**
 * Update a category
 * URL [POST] /:id
 * 
 * @param req 
 * @param res 
 */
const updateCategory = async (req: Request, res: Response): Promise<any> => {
    try {
        const category: ICategory = req.body;
        const id = req.params.id;
        CategoryService.updateCategory(id, category)
            .then(() => {
                res.json({
                    status: 'success'
                });
            })
            .catch((error) => {
                res.json({
                    status: 'failed',
                    error: error
                })
            })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error
        })
    }
}

/**
 * Delete a category
 * URL [POST] /:id
 * 
 * @param req 
 * @param res 
 */
const deleteCategory = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        CategoryService.deleteCategory(id)
            .then(() => {
                res.json({
                    status: 'success'
                });
            })
            .catch((error) => {
                res.json({
                    status: 'failed',
                    error: error
                })
            })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error
        })
    }
}

/**
 * Exporting controllers
 */
export default {
    addCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}
