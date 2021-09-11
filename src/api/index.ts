import { Router } from "express";
import user from "./user/user.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Code Kitty!");
});

router.use("/user", user);

export default router;
