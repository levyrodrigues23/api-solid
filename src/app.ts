import fastify from 'fastify';

import { env } from './env/index.js';
import { PrismaClient } from './generated/prisma/client.js';

export const app = fastify();

export const prisma = new PrismaClient({
    accelerateUrl: env.DATABASE_URL,
});

prisma.user.create({
    data: {
        name: "levy",
        email: "teste"
    }
})