import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import { zodValidator } from "./middlewares";
import { userModel } from "./db";

const app = express();
app.use(express.json());

//@ts-ignore
app.post("/signup",zodValidator,async (req,res)=>{
    const {email , password} = req.body;
    console.log("here");
    try{
        await userModel.create({
            email,
            password : await bcrypt.hash(password,5)
        });
        res.json({
            message : "Added user"
        })
    }catch(err){
        res.json({
            messaga :  "/signup",
            err
        })
    }
});

app.post("/signin",async (req,res)=>{
    
    const {email , password} = req.body;
    try{
        const foundUser = await userModel.findOne({email});
        if(!foundUser){
            res.status(401).json({
                mssage : "N0"
            })
        }else{
            const isValid = await bcrypt.compare(password,foundUser.password);
            const token = jwt.sign({
                id : foundUser._id 
            },"JWT_SECRET");
            res.json({
                token
            })
        }
    }
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

(async ()=>{
    await mongoose.connect("mongodb+srv://achewadakhil11:G2e8C3zg4sPRuN8v@cluster0.kf8z6.mongodb.net/second-brain")
    .then(()=>{console.log("DB connected")})
    .catch(()=>{console.log("DB not connected")});
    app.listen(8080,()=>console.log("Server is running at 8080"));
    
})();