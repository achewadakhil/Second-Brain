import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { zodValidator } from "./middlewares";

const app = express();
app.use(express.json());
//@ts-ignore
app.post("/signup",zodValidator,(req,res)=>{
    const {email , password} = req.body;
    res.json({
        message : "Seccuess"
    });
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
