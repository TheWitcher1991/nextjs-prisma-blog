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
        <html itemScope itemType="https://schema.org/WebPage" lang="ru" dir="ltr" prefix="og: https://ogp.me/ns#">
        <head>
            <title itemScope="name">Blog NEXT.js</title>
            <meta charSet="UTF-8" />
            <meta name="viewport' content='width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta httpEquiv="x-dns-prefetch-control" content="on" />
        </head>
        <body className={inter.className}>
            <Header title='TheWitcher1991' />
            {children}
            <Footer title='TheWitcher1991' />
        </body>
        </html>
    )
}