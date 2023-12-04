import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()


export class DeleteTask {
    async task(req: Request, res: Response) {
        const {
            taskId  
        } = req.body;

        try {
            const result = await prisma.task.delete({
                where: { id: taskId },
              })

            if(result){
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