import { Router } from "express";
import categoryController from "./category.controller";

const router = Router();

router.get('/', categoryController.getAllCategories);       // get all categories
router.get('/:id', categoryController.getCategoryById);     // get category by id
router.post('/', categoryController.addCategory);           // create new category
router.put('/:id', categoryController.updateCategory);      // update category
router.delete('/:id', categoryController.deleteCategory);   // delete category

export default router;
