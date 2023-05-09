import { PrismaClient, Prisma } from '@/generated/client'

const prisma = new PrismaClient()

export { prisma, Prisma }