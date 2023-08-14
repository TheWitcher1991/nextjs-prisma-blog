import * as React from 'react'

import { _ } from '../web/_'
import css from '../styles/form.module.css'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string
    placeholder?: string
    error?: string
    children?: React.ReactNode
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
    ({ children, labelText, placeholder, type = 'text', error, ...props }, ref) => {
        const id = _.bcrypt()
        return (
            <div className={css.formLabel}>
                <label className={css.formLabelText} htmlFor={id}>{labelText}</label>
                <div>
                    <input
                        id={id}
                        autoComplete="off"
                        className={`${css.formInput} ${error && ""}`}
                        {...props}
                        ref={ref}
                        type={type}
                        placeholder={placeholder}
                    />
                    {/*<div>{children}</div>*/}
                </div>
                {error && (
                    <p>{error}</p>
                )}
            </div>
        )
    }
)

TextBox.displayName = 'TextBox'

export default TextBox