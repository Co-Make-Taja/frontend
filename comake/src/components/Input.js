import React from 'react'

export default function Input({ label, name, inputChange, errors, type }) {

    return (
        <div>
            <label for={name}>{label}</label>
            <br/>
            <input id={name} type={type}name={name} onChange={inputChange}></input>
            <span>{errors[name] ? errors[name] : null}</span>
        </div>
    )
}