import * as mongo from "mongodb";

export class MongoHelper {
  public static client: mongo.MongoClient;

  public static async connect(url: string): Promise<void> {
    try {
      this.client = await mongo.MongoClient.connect(url, {

      });
    } catch (e) {
      throw e;
    }
  }

  public async disconnect(): Promise<void> {
    await MongoHelper.client.close();
  }
}
