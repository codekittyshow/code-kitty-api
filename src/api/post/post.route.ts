import { Router } from "express";
import Controller from "./post.controller";

const post: Router = Router();
const controller = new Controller();

post.post("/", controller.addPost);
post.get("/:id", controller.getPost);
post.get("/", controller.getAllPost);
post.put("/", controller.updatePost);
post.delete("/:id", controller.deletePost);
post.get("/users/all", controller.getAllPostsWithUsers);
post.get("/user/:id", controller.getPostsByUser);

export default post;
