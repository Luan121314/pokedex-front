import React, {InputHTMLAttributes } from 'react';
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-component" key={name} >
            <label htmlFor={`input-${name}`}>{label}</label>
            <input name={name} type="text" {...rest}   />
        </div>
    )
}

export default Input;