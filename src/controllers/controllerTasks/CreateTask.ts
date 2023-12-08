import { Request, Response } from 'express';
import prisma from '../../database/Client';

export class CreateTask {
    async task(req: Request, res: Response) {
        const {
            
            title,
            description,
            categories,
            authorId  // Assuming you have userId in the request body
        } = req.body;

        try {

            console.log(authorId)
            // Check if the user with the specified ID exists
            const user = await prisma.user.findUnique({
                where: {
                    id: authorId
                }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Create a new task with the associated user
            const result = await prisma.task.create({
                data: {
                
                    title: title,
                    description:description,
                    categories: categories,
                    author: {
                        connect: {
                            id: authorId
                        }
                    }
                }
            });

            return res.status(201).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error ixi' });
        }
    }
}