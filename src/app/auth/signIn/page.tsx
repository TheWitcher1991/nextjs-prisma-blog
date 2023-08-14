'use client'

import { signIn } from 'next-auth/react'
import * as React from 'react'
import { useRef } from 'react'
import { faAt, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextBox from '../../../componets/TextBox'
import css from '../../../styles/form.module.css'

export default function LoginPage() {
    const email    = useRef<string>('')
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
                <div>
                    <TextBox
                        labelText="Email"
                        type="email"
                        onChange={(e) => (email.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faAt} />}
                    />
                    <TextBox
                        labelText="Пароль"
                        type="password"
                        onChange={(e) => (password.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faFingerprint} />}
                    />
                    <p className={css.formP}>By submitting this form, I confirm that I have read and understood the Blog Privacy Statement.</p>
                    <button className={css.formButton} onClick={login}>Войти</button>
                </div>
            </div>
        </div>
    )
}
