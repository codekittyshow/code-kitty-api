import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    _id: mongoose.Schema.Types.ObjectId;
    displayName: string;
    email: string;
    photoURL: string;
}