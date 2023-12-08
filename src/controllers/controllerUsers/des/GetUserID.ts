import { Request, Response } from 'express';
import prisma from '../../../database/Client';

export class GetUserID {
    async userId(req: Request, res: Response) {
        const {
            id
        } = req.params
        console.log(id)
        try {

            const result = await prisma.user.findUnique({
                where: {
                    id: id
                },
                include: {
                    tasks: true, // Assuming you have a relation named 'tasks' in your User model
                },
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