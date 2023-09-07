var express = require("express");
var mongodb =require("mongodb");
var cors=require("cors");
const multer=require("multer");

var app=express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://saikumap:Rokkam944@cluster0.ppt9la2.mongodb.net/?retryWrites=true&w=majority";

var DATABASE="IMS";
var database;
app.listen(5038,()=>{
    const client = new mongodb.MongoClient(CONNECTION_STRING);
        client.connect()
        .then((db) => {
            database = db.db(DATABASE);
            console.log("Mongo is successful");
          })
          .catch((err) => {
            console.error(err);
          });
})
