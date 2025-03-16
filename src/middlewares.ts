import { NextFunction , Request , Response} from "express";
import z from "zod";
export const zodValidator = (req : Request ,res : Response,next : NextFunction) => {
    const {email,password} = req.body;
    const schema = z.object({
        email : z.string().email("Invalid email"),
        password : z.string().min(6,"Invalid password")
    });
    const isValid = schema.safeParse({email,password});
    if(isValid) next();
    return res.status(401).json({
        message : "Error occured somewhere"
    });
}