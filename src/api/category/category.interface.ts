import * as mongoose from "mongoose";

export default interface ICategory extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    categoryName: string;
}
