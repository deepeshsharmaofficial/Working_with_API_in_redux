const express = require("express");
const todoRoutes=require("./todoRoutes");

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

server.listen(4100);

server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4100");