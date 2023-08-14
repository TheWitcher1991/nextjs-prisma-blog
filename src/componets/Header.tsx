'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faFingerprint } from '@fortawesome/free-solid-svg-icons'
import { signIn, signOut, useSession } from 'next-auth/react'

import { header } from '@/web/routes'
import css from '../styles/header.module.css'

interface Props {
    title: string
}

export default function Header ({ title } : Props): JSX.Element {
    const pathname = usePathname()
    const { data: session } = useSession()

    return (
        <header className={css.header}>
            <section className={css.headerContainer}>
                <nav className={css.headerNav}>
                    <div className={css.headerLeft}>
                        <div className={css.headerLogo}>
                            <FontAwesomeIcon
                                icon={faFingerprint}
                                className={css.headerLogoIcon}
                            />
                            <span className={css.headerLogoText}>{title}</span>
                        </div>
                        
                        <ul className={css.headerMenu}>

                            {header.map(({ id, title, path, popup }) => (
                                <li key={id}>
                                    <Link
                                        className={pathname === path ? css.headerActiveLink : css.headerLink} 
                                        href={path}
                                    >{title} {popup && (
                                        <FontAwesomeIcon
                                            icon={faChevronDown}
                                            className={css.headerIcon}
                                        />
                                    )} </Link>

                                    {popup && (
                                        <ul className={css.headerPopup}>
                                            {popup.map(({ id, title, path }) => (
                                                <li key={id}>
                                                    <Link href={path}>{title} </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                        </ul>
                    </div>
                    <div className={css.headerRight}>

                        {session?.user ? (
                            <>
                                <button className={css.headerBth} onClick={() => signOut()}>Выйти</button>
                            </>
                        ) : (
                            <>
                                {pathname !== '/auth/signIn' ? (
                                    <button className={css.headerBth} onClick={() => signIn()}>Войти</button>
                                ) : null}

                                {pathname !== '/auth/signUp' ? (
                                    <Link className={css.headerBthActive} href='/auth/signUp'>Регистрация</Link>
                                ) : null}
                            </>
                        )}

                    </div>
                </nav>
            </section>
        </header>
    )
}