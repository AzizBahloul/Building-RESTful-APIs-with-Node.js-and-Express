const express = require('express');

const app = express();

const dbConnect = require('./dbConnect')

dbConnect()

module.exports = app;
