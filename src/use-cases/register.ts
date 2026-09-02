import { hash } from "bcryptjs"
import { prisma } from "../lib/prisma.js"
import { PrismaUsersRepository } from "../repositories/prisma-users-repository.js";

interface RegisterUserCaseRequest {
    name: string;
    email: string;
    password: string;
}

export async function registerUserCase(
    { name, email, password }: RegisterUserCaseRequest
) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await prisma.user.findUnique({

        where: {
            email,
        }
    })

    if (userWithSameEmail) {

        throw new Error("email already exists")
    }

   const prismaUsersRepository = new PrismaUsersRepository()

   await prismaUsersRepository.create({
    name,
    email, 
    password_hash,
   })
}