"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import ejsLayout from "express-ejs-layouts";
const server = (0, express_1.default)();
const port = 3080;
server.use(express_1.default.static(__dirname + '/public'));
server.set('views', [path_1.default.join(__dirname, './'), path_1.default.join(__dirname, './src/components/')]);
server.set('view engine', 'ejs');
// server.use(ejsLayout);
server.use('/', (req, res, next) => {
    res.render("index.ejs");
});
server.use('/', (req, res) => {
    res.send("404 not found");
});
server.listen(port, () => {
    console.log(`Server running (http://localhost:${port})`);
});
