import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()


export class CreateUser {
    async user(req: Request, res: Response) {
        const {
            name,
            email, password
        } = req.body

        try {
            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password:password
                }
            })
            return res.status(201).json('Created')
        } catch (Error) {
            console.log(Error)
            return res.status(400).json(Error)
        }


    }

}


/* main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) */