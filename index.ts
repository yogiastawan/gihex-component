import express from "express";
import path from "path";
// import ejsLayout from "express-ejs-layouts";

const server = express();
const port = 3080;

server.use(express.static(__dirname + '/public'));

server.set('views', [path.join(__dirname, './'), path.join(__dirname, './src/components/')]);

server.set('view engine', 'ejs');

// server.use(ejsLayout);

server.use('/', (req, res, next) => {
    res.render("index.ejs")
});

server.use('/', (req, res) => {
    res.send("404 not found");

});

server.listen(port, () => {
    console.log(`Server running (http://localhost:${port})`);
});