import { prisma } from "../../lib/prisma.js"
import { z } from "zod"
import {hash} from "bcryptjs"
import type {FastifyRequest, FastifyReply} from "fastify"

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(), 
        email: z.email(),
        password: z.string().min(6)
    })


    const { name, email, password } = registerBodySchema.parse(request.body)

    const password_hash = await hash(password, 6 )

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash: password,
        }
    })

    return reply.status(201).send()
}