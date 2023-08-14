import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '@/lib/prisma'
import { _ } from '@/web/_'

export const authOptions : NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                username: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                const { email, password } = credentials

                if (!email || !password)
                    return null

                let user = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })

                if (!user)
                    return null

                /*const res = axios
                    .post('http://localhost:3000/auth/login',
                        {
                            body: JSON.stringify({
                                email,
                                password
                            })
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    )
                    .then(res => console.log(res))*/

                const res = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password
                    }),
                })

                user = await res.json()

                if (res.ok) {
                    return {
                        ...user,
                        randomKey: _.bcrypt()
                    }
                }
            }
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            console.log('Session Callback', { session, token })
            session.user = token as any
            return session
        },
        async jwt({ token, user }) {
            console.log('JWT Callback', { token, user })
            return { ...token, ...user }
        }
    },
    pages: {
        signIn: '/auth/signIn',
    }
}

export default NextAuth(authOptions)