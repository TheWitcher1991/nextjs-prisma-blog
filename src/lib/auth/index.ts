import User from '@/server/client'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from './passwordUtils'

export interface LoginParams {
    email: string;
    password: string;
}

export async function login (params: LoginParams): Promise<User> {
    const user = await prisma.user.findUnique(
        {
            where: {
                email: params.email
            }
        }
    );

    if (!user) return null

    if (await verifyPassword(user.password, params.password)) {
        user.password = ''

        return user
    }

    return null
}