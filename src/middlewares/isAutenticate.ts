import { NextFunction, Request,Response } from "express";
import prismaClient from "../prisma";
import{ verify} from 'jsonwebtoken'

interface Payload{
    sub:string
}

export function isAutenticate(req:Request,res:Response,next:NextFunction){
    console.log('midleware')
 

    // receber token
    const authToken =req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }
    //pega apenas  o token sem o prefixo
    const [,token] = authToken.split(' ')

try{
const {sub} = verify(
    token,
    process.env.JWT_SECRET
) as Payload;


//guarda o id do token na varieavek
req.user_id= sub;
next()
   
}
catch(err){
    return res.status(401).end()
}

}
