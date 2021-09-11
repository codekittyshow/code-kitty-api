import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import apiV1 from "./api";
import { MongoHelper } from "./config/mongodb.config";
import Config from "./config/config";
import * as errorHandler from "./helpers/error.handler";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlware();
    this.setRoutes();
    this.connectToDB();
    this.catchError();
  }

  private setMiddlware(): void {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(morgan("dev"));
  }

  private setRoutes(): void {
    this.express.use("/api/v1", apiV1);
  }

  private async connectToDB(): Promise<void> {
    const MONGO_DB_URI = Config.MONGO_DB_URI;
    try {
      await MongoHelper.connect(MONGO_DB_URI);
      console.info(`Connected to MongoDB!`);
    } catch (e) {
      console.error(`Unable to connect to MongoDB!`, e.message);
    }
  }

  private catchError(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
    this.express.use(errorHandler.badRequest);
  }
}

export default new App().express;
