import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()


export class GetOneUser {
    async user(req: Request, res: Response) {
        const {
            password,
            email
        } = req.body

        try {
            const result = await prisma.user.findUnique({
                where: {
                  password:password,
                  email: email,
                },
                include: {
                  tasks: true, // Assuming you have a relation named 'tasks' in your User model
                },
              });

            if(result && result.password === password){
                 return res.status(201).json(result)
            }else{
                return res.status(505).json("usuario nao encontrado")
            }
                
    
           
        } catch (Error) {
            console.log(Error)
            return res.status(400).json(Error)
        }


    }

}