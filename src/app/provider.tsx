'use client'

import * as React from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
    children?: React.ReactNode
}

export default function Provider({ children } : Props): JSX.Element {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}
