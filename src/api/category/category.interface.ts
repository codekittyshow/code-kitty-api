import * as mongoose from "mongoose";

export default interface ICategory extends mongoose.Document {
    name: string;
}
