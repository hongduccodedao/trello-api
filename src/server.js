// eslint-disable-next-line no-console

import express from "express";
import "dotenv/config";
import { CONNECT_DB, GET_DB } from "~/config/mongodb.js";

const START_SERVER = async () => {
  const app = express();

  const hostname = process.env.APP_HOST || "localhost";
  const port = process.env.PORT || 5000;

  app.get("/", (req, res) => {
    res.end("<h1>Hello World!</h1><hr>");
  });

  app.listen(port, hostname, () => {
    console.log(`3. Back-end Server is running successfully at ${hostname}:${port}/`);
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
})()
