import * as React from 'react'
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma, Prisma } from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    switch (req.method) {
        case '[METHOD].[MODULE]':
            return
        default:
            return res.status(500).json('page not found')
    }
    
}

/*main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })*/

const getArticle = async (req, res) => {
    try {
        const result = await prisma.articles.findMany()
        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e.message)
    }
}

const getArticles = async (req, res) => {
    try {
        const { id } = req.body
        
        const result = await prisma.articles.findFirst({
            where: {
                id: {
                    equals: parseInt(id)
                }
            }
        })
        
        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e.message)
    }
}

const createArticles = async (req, res) => {
    try {
        const { title, text, img, date, user_id } = req.body
        
        const result = await prisma.articles.create({
            data: { title, text, img, date, user_id },
            select: {
                id: true
            }
        })
        
        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e.message)
    }
}

const deleteArticles = async (req, res) => {
    try {
        const { id } = req.body
        
        const result = await prisma.articles.delete({
            where: {
                id: parseInt(id)
            }
        })

        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e.message)
    }
}