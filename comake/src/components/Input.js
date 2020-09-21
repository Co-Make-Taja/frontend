import React from 'react'

export default function Input({ label, name, inputChange, errors, type }) {

    return (
        <div>
            <label>{label}</label>
            <input type={type}name={name} onChange={inputChange}></input>
            <span>{errors[name] ? errors[name] : null}</span>
        </div>
    )
}