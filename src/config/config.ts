import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

export default {
  PORT: PORT,
  MONGO_DB_URI: MONGO_DB_URI,
  DB_NAME: "CodeKitty",
  USER_COLLECTION_NAME: "user",
  CATEGORY_COLLECTION_NAME: "category",
};
