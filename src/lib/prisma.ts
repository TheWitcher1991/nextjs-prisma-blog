import { PrismaClient, Prisma } from '@/server/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ['query']
})

export { prisma, Prisma};
