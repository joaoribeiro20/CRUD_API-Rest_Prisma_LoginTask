import { Request, Response } from 'express';
import prisma from '../../database/Client';

export class UpdateTask {
    async task(req: Request, res: Response) {
        const {
            authorId,        
            categories,        
            description,       
            id,          
            statu,         
            title        
        } = req.body;

        try {
            const result = await prisma.task.update({
                where: { id: id },
                data: {
                   title:title,
                   description:description,
                   categories:categories,
                   statu:statu
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