const express = require('express');

const app = express();

app.use = (express.json())

const userController = require("./controllers/user.controller")

const commentController =require("./controllers/comment.controllers")

const bookController = require("./controllers/book.controller")

app.use("/users",userController)

app.use("/comments",commentController)

app.use("/books",bookController)

module.exports = app;