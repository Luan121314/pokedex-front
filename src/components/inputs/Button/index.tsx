import React, { ButtonHTMLAttributes, } from 'react';
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    name: string
}

const Button: React.FC<ButtonProps> = ({ label, name, ...rest }) => {
    return (
        <button
            className="button-component btn"
            key={name}
            {...rest}
        >
            {label}
        </button>
    )
}

export default Button;