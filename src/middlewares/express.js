const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const consign = require('consign');
const environment = require('../configuration/environment');

const app = express();

app.use(cors({ origin: '*' }));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

consign().include(environment.routes).into(app);

module.exports = app;
