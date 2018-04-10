"use strict";
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    routes = require('./routes'),
    port = process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', routes);
app.listen(port, () => console.log(`Listen ${port}. Well done`));