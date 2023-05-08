import { NextApiHandler, NextApiResponse } from 'next'

import { prisma } from '@/config/db'

export default async function handler(req: NextApiHandler, res: NextApiResponse) {
    
    switch (req.method) {
        case '[METHOD].[MODULE]':
            return 'HANDLER'
        default:
            return res.status(500).json('page not found')
    }
    
}

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
        const { title, text, img, date } = req.body
        
        const result = await prisma.articles.create({
            data: { title, text, img, date },
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
        
        const result = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })

        return res.status(200).json(result)
    } catch (e) {
        return res.status(500).json(e.message)
    }
}