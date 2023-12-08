import { Request, Response } from 'express';
import prisma from '../../database/Client';


export class GetAllTasks {
    async Tasks(req: Request, res: Response) {
        const {
            authorId
        } = req.params
        console.log(authorId)
        try {

            const result = await prisma.task.findMany({
                where: {
                    authorId: authorId
                }
            });

            if (result) {
                return res.status(201).json(result)
            } else {
                return res.status(505).json("usuario nao encontrado")
            }



        } catch (Error) {
            console.log(Error)
            return res.status(400).json(Error)
        }


    }

}