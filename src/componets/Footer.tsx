'use client'

import * as React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

import { footer } from '@/utils/routes'
import css from '../styles/footer.module.css'

interface Props {
    title: string
}

export default function Footer ({ title } : Props): JSX.Element {
    return (
        <footer className={css.footer}>
            <section className={css.footerContainer}>
                <div className={css.footerFlex}>
                    <div className={css.footerLogo}>
                        <FontAwesomeIcon
                            icon={faFingerprint}
                            className={css.footerLogoIcon}
                        />
                        <span className={css.footerLogoText}>{title}</span>
                    </div>

                    {footer.map(({ id, title, list }) => (
                        <div key={id}>
                            <span className={css.footerH1}>{title}</span>

                            <ul className={css.footerUl}>
                                {list.map(({ id, title, path }) => (
                                    <li key={id}>
                                        <Link className={css.footerA} href={path}>{title}</Link>
                                    </li>
                                ))} 
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={css.footerCopy}>
                    <span className={css.footerCopyText}>Copyright © 2077 {title}, Inc. All rights reserved.</span>
                </div>
            </section>
        </footer>
    )
}
