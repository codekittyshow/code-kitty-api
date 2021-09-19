import * as mongoose from "mongoose";
import { IPost } from "./post.interface";

export const PostSchema = new mongoose.Schema({
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    createdDate: { type: String, required: true },
    userId: { type: String, required: true },
    categoryName: { type: String, required: true },
});

const Post = mongoose.model<IPost>("Post", PostSchema);
export default Post;
