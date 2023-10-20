// eslint-disable-next-line no-console

import express from "express";
import exitHook from "async-exit-hook";
import { CLOSE_DB, CONNECT_DB } from "~/config/mongodb.js";
import { env } from "./config/environment";

const START_SERVER = async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(
      `3. Back-end Server is running successfully at ${env.APP_HOST}:${env.APP_PORT}/`
    );
  });

  exitHook(async () => {
    await CLOSE_DB();
    console.log("4. Disconnected successfully from MongoDB server");
  });
};

(async () => {
  try {
    console.log("1. Connecting to MongoDB server...");
    await CONNECT_DB();
    console.log("2. Connected successfully to MongoDB server");
    await START_SERVER();
  } catch (error) {
    console.log("2. Connect failure to MongoDB server" + error);
    process.exit(0);
  }
})();
