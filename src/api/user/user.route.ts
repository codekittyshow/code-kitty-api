import { Router } from "express";
import Controller from "./user.controller";

const user: Router = Router();
const controller = new Controller();

user.post("/", controller.addUser);

export default user;
