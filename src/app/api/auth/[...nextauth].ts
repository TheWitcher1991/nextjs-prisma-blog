import NextAuth from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/config/db'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: []
}

export default NextAuth(authOptions)

