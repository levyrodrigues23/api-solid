import { hash } from "bcryptjs"
import { prisma } from "../lib/prisma.js"
import type { UsersRepository } from "../repositories/users-repository.js";
import { userAlreadyExistsError } from "./errors/user_already_exists.js";
import type { User } from "../generated/prisma/client.js";

interface RegisterUserCaseRequest {
    name: string;
    email: string;
    password: string;
}

interface RegisterUseCaseResponse {
    user: User
}

export class RegisterUseCase {
    constructor(private usersRepository: UsersRepository) { }
    async execute(
        { name, email, password }: RegisterUserCaseRequest
    ): Promise<RegisterUseCaseResponse> {
        const password_hash = await hash(password, 6)

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new userAlreadyExistsError()
        }
        const user = await this.usersRepository.create({
            name,
            email,
            password_hash,
        })
        return {
            user,
        }
    }
}

