import * as React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Inter } from 'next/font/google'

import Header from '../componets/Header'
import Footer from '../componets/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

interface Props {
    children: React.ReactNode
}

export default function RootLayout({ children } : Props): JSX.Element {
    return (
        <html lang="ru">
        <head>
            <title>Blog NEXT.js</title>
        </head>
        <body className={inter.className}>
            <Header title='TheWitcher1991' />
            {children}
            <Footer />
        </body>
        </html>
    )
}