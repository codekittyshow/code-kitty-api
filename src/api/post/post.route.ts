import { Router } from "express";
import Controller from "./post.controller";

const post: Router = Router();
const controller = new Controller();

post.post("/", controller.addPost);
post.get("/:userId", controller.getPost);
post.get("/", controller.getAllPost);
post.put("/", controller.updatePost);
post.delete("/:userId", controller.deletePost);

export default post;
