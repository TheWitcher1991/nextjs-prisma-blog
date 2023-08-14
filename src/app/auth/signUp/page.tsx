'use client'

import * as React from 'react'
import { useRef } from 'react'
import { faAt, faFingerprint, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextBox from '../../../componets/TextBox'
import css from '../../../styles/form.module.css'

export default function RegisterPage() {
    const email        = useRef<string>('')
    const name         = useRef<string>('')
    const password     = useRef<string>('')
    const confPassword = useRef<string>('')

    return (
        <div className={css.formBlock}>
            <div className={css.form}>
                <h1 className={css.formH1}>Создайте свой аккаунт</h1>
                <div>
                    <TextBox
                        labelText="Email"
                        type="email"
                        onChange={(e) => (email.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faAt} />}
                    />
                    <TextBox
                        labelText="Ваше имя"
                        type="name"
                        onChange={(e) => (name.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faUser} />}
                    />
                    <TextBox
                        labelText="Пароль"
                        type="password"
                        onChange={(e) => (password.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faFingerprint} />}
                    />
                    <TextBox
                        labelText="Подтвердите пароль"
                        type="password"
                        onChange={(e) => (confPassword.current = e.target.value)}
                        children={<FontAwesomeIcon icon={faFingerprint} />}
                    />
                    <p className={css.formP}>By submitting this form, I confirm that I have read and understood the Blog Privacy Statement.</p>
                    <button className={css.formButton} >Создать</button>
                </div>
            </div>
        </div>
    )
}