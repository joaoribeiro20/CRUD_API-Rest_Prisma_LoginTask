import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()


export class UpdateTask {
    async task(req: Request, res: Response) {
        const {
            title,
            description,
            taskId  // Assuming you have userId in the request body
        } = req.body;

        try {
            const result = await prisma.task.update({
                where: { id: taskId },
                data: {
                    title:title,
                    description:description
                },
              })
            if(result ){
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