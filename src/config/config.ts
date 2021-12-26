import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const MONGO_DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

export default {
  PORT: PORT,
  MONGO_DB_URI: MONGO_DB_URI,
  DB_NAME: DB_NAME,
  USER_COLLECTION_NAME: "user",
  CATEGORY_COLLECTION_NAME: "category",
  POST_COLLECTION_NAME: "post",
};
