import { Router } from "express";
import categoryRouter from "./category/category.route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Code Kitty!");
});

//
router.use("/category", categoryRouter);

export default router;