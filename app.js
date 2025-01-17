const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});

app.get("/about", (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get("/clubs", (request, response, next) => {
    response.sendFile(__dirname + '/views/clubs.html');
});

app.get("/gallery", (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3001, () => { console.log("server listening on port 3001")});