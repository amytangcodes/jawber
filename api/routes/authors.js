const express = require("express");
const uuid = require("uuid/v4");

const authorRouter = express.Router();

const AUTHORS = {};

exports.router = authorRouter;
