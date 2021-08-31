import * as mongo from "mongodb";

export class MongoHelper {

  public static async connect(): Promise<mongo.MongoClient> {
    try {
      return await mongo.MongoClient.connect(process.env.MONGO_DB_URI || '', {});
    } catch (e) {
      throw e;
    }
  }

  public static async disconnect(client: mongo.MongoClient): Promise<void> {
    await client.close();
  }
}
