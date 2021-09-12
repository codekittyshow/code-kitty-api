import { Router } from "express";
import Controller from "./category.controller";

const category: Router = Router();
const controller = new Controller();

category.get('/', controller.getAllCategories);       // get all categories
category.get('/:id', controller.getCategoryById);     // get category by id
category.post('/', controller.addCategory);           // create new category
category.put('/:id', controller.updateCategory);      // update category
category.delete('/:id', controller.deleteCategory);   // delete category

export default category;
