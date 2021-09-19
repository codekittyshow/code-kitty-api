import * as mongoose from "mongoose";

export interface IPost extends mongoose.Document {
  description: string;
  imageURL: string;
  createdDate: string;
  userId: string;
  categoryName: string;
}
