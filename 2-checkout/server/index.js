require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

//import routes
const routes = require("./routes.js")

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

//Other routes here....
app.use('/checkout', routes);


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
