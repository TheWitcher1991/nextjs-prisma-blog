'use client'

import { signIn } from 'next-auth/react'
import { useRef } from 'react'

import css from '../../../styles/form.module.css'

interface Props {
    searchParams?: { [key: string]: string | string[] | undefined };
}

export default function LoginPage({ searchParams } : Props) {
    const email = useRef<string>('')
    const password = useRef<string>('')

    const login = async () => {
        const result = await signIn('credentials', {
            email: email.current,
            password: password.current,
            redirect: true,
            callbackUrl: '/',
        })
    }

    return (
        <div className={css.formBlock}>
            <div className={css.form}>
                <h1 className={css.formH1}>Вход в личный кабинет</h1>
                {searchParams?.message && <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}
            </div>
        </div>
    )
}
