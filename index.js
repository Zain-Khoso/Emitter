// Eternal
import { configDotenv } from "dotenv";
import express from "express";
import { connect } from "mongoose";

// Local
import api from "./src/routes/api.js";

// Reading Environment Variables.
configDotenv();
const port = process.env.PORT;

// Initializing Root Express App.
const App = express();

// Setting Up Middlewares.
App.use(express.static("./src/public"));
App.use(express.json());

// Setting up EJS.
App.set("views", "./src/views");
App.set("view engine", "ejs");

// Setting up API Router.
App.use(api);

// Serving the static page.
App.get("/", (_, res) => res.render("index"));

// Connecting to MongoDB and only then starting the server.
(async function () {
  await connect("mongodb://localhost:27017/emitter");

  App.listen(port);
})();
