import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    displayName: string;
    email: string;
    photoURL: string;
    uid: string;
}
