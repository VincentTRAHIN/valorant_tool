require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const router = require('./app/router.js');
const champions = require('./data/champions');
const maps = require('./data/maps');

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.locals.champions = champions;
app.locals.maps = maps;

app.use(express.static(path.join(__dirname, "./public")));

app.use(router);

app.set('port', process.env.PORT || 3000);

app.set('base_url', process.env.BASE_URL + ':' + app.get('port'));

app.listen(app.get('port'), () => {
        console.log(`Listening on ${app.get('base_url')
    }`);
});