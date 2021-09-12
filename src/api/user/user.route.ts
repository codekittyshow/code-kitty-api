import { Router } from "express";
import Controller from "./user.controller";

const user: Router = Router();
const controller = new Controller();

user.post("/", controller.addUser);
user.get("/:id", controller.getUser);
user.get("/", controller.getAllUsers);
user.put("/", controller.updateUser);
user.delete("/:id", controller.deleteUser);

export default user;
