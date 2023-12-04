import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export class CreateTask {
    async task(req: Request, res: Response) {
        const {
            title,
            description,
            userId  // Assuming you have userId in the request body
        } = req.body;

        try {
            // Check if the user with the specified ID exists
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            });

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Create a new task with the associated user
            const result = await prisma.task.create({
                data: {
                    title: title,
                    description: description,
                    author: {
                        connect: {
                            id: userId
                        }
                    }
                }
            });

            return res.status(201).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}