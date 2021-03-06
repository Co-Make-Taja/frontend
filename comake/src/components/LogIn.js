import React, { useEffect, useState } from 'react'
import Input from './Input'
import axios from 'axios'

export default function Login() {

    const [loginData, changeLoginData] = useState({
        username: '',
        password: ''
    })

    const [errors, changeErrors] = useState({
        username: '',
        password: ''
    })

    const [disabled, setDisabled] = useState(false)

    function inputChange(event) {
        event.persist()
        const name = event.target.name
        const value = event.target.value

        checkValid(value, name)

        changeLoginData({
            ...loginData,
            [name]: value
        })
    }

    useEffect(() => {
        // Disabling/enabling submit goes here
    }, [loginData])

    function checkValid(value, name) {
        // Any validation checks go here
        return
    }

    const login = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://bw-comakeapp-java.herokuapp.com/login",
                `grant_type=password&username=${loginData.username}&password=${loginData.password}`,
                {
                    headers: {
                        // btoa is converting our client id/client secret into base64
                        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                },
            )
            .then((res) => {
                console.log(res.data);
                localStorage.setItem("token", res.data.access_token);
                // props.history.push("/");
            });
    };

    return (
        <div>
            <form onSubmit={login}>
                <Input name="username" type="text" inputChange={inputChange} errors={errors} label="username or email"></Input>
                <Input name="password" type="password" inputChange={inputChange} errors={errors} label="password"></Input>

                <button>Submit</button>
            </form>
        </div>
    )
}