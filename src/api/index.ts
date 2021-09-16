import { Router } from "express";
import user from "./user/user.route";
import category from "./category/category.route";
import post from "./post/post.route"

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Code Kitty!");
});

router.use("/user", user);
router.use("/category", category);
router.use("/post", post);

export default router;
