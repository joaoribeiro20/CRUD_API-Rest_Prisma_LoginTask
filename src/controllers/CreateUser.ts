import { PrismaClient } from '@prisma/client'
import { Request, Response } from "express";

const prisma = new PrismaClient()


export class CreateUser {
    async user(req: Request, res: Response) {
        const {
            name,
            email, 
            password,
            telefone,
            apelido,
            cep
        } = req.body

        try {
            await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password:password,
                    telefone:telefone,
                    apelido:apelido,
                    cep:cep
                }
            })
            return res.status(201).json('Created')
        } catch (Error) {
           console.log(Error)
            return res.status(400).json("Usuario ja existente com esse email")
        }


    }

}
