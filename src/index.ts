import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const app = express();


app.post("/signup",(req,res)=>{

});

app.post("/signin",(req,res)=>{

})

app.post("/content",(req,res)=>{

})

app.get("/content",(req,res)=>{

})

app.delete("/content",(req,res)=>{

})

app.post("/share",(req,res)=>{

})

app.get("/:shareLink",(req,res)=>{

});

app.listen(8080,()=>console.log("Server is running at 8080"))
