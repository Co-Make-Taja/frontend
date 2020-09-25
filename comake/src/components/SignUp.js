import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
// import Form from './Form'
import Input from './Input'
// import UseIsMount, { useIsMount } from './UseIsMount'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios';



export default function SignUp() {
    const history = useHistory()
    const data = {
        username: '',
        primaryemail: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const nameLabels = [{

        name: 'username',
        label: 'Username',
        type: 'text'
    },

    {
        name: 'primaryemail',
        label: 'Email',
        type: 'text'
    },

    {
        name: 'phone',
        label: 'Phone',
        type: 'text'
    },

    {
        name: 'password',
        label: 'Password',
        type: 'password'
    },

    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password'
    },

    ]

    const [errors, setErrors] = useState({ ...data })
    const [fieldData, changeData] = useState({ ...data })

    const [disabled, setDisabled] = useState(true)

    // const isMount = useIsMount(errors)

    const schema = Yup.object().shape({
        username: Yup.string().required("Please enter a name."),
        primaryemail: Yup.string().required("Please enter an email.").email("This email is not valid."),
        phone: Yup.string().required().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, "The phone number is not valid."),
        'password': Yup.string().required().min(6),
        // passwordConfirmation: Yup.string()
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords do not match")
    })




    // useEffect(() => {

    //     if (!isMount) {

    //         const curErrors = Object.values(errors)

    //         for (let i = 0; i < curErrors.length; i++) {
    //             if (curErrors[i]) {
    //                 setDisabled(true)
    //                 return
    //             }
    //         }

    //         setDisabled(false)

    //     }
    // }, [errors])

    useEffect(() => {
        schema.validate(fieldData)
            .then((valid) => {
                setDisabled(!valid)
            })
            .catch((error) => { })
    }, [fieldData])
    // useEffect(() => {

    // }, [fieldData])

    const inputChange = (event) => {
        event.persist()
        const name = event.target.name
        const value = event.target.value

        checkValid(value, name)

        changeData({
            ...fieldData,
            [name]: value
        })
        // fieldData[event.target.name] = event.target.value
    }

    function checkValid(value, name) {

        if (name === 'confirmPassword') {
            if (value === fieldData.password) {
                setErrors({ ...errors, [name]: '' })
            }

            else {
                setErrors({ ...errors, [name]: 'Passwords do not match' })
            }
        }

        else {


            Yup.reach(schema, name).validate(value)
                .then(valid => {
                    setErrors({ ...errors, [name]: '' })
                })
                .catch(err => {
                    setErrors({ ...errors, [name]: err.errors[0] })
                })

        }
        // schema.validate(value)
    }

    const registrationSubmit = () => {
        //axiosWithAuth()
        axios
        .post('https://bw-comakeapp-java.herokuapp.com/createnewuser', fieldData)
        .then(console.log(fieldData))
        history.push('/login')
        //.catch(err => {console.log(err)})
    }

    return (

        <div class="form-outer">
            <h2>Sign up</h2>

            {/* <Form data={data} schema = {schema} inputChange={inputChange} nameLabels={nameLabels}></Form> */}

            {
                <form class="form" onSubmit = {registrationSubmit}>
                    {nameLabels.map((item) => {
                        return (<Input name={item.name} type={item.type} label={item.label} inputChange={inputChange} errors={errors}></Input>)
                    })}
                    <button disabled={disabled}>Submit</button>
                    <Link class="link" id="login" to={'/login'}> Have an account? Login!</Link>
                </form>
            }



            {/* <form>
                <Input name="username" type="text" label="Username" inputChange={inputChange} errors={errors}></Input>

                <Input name="email" type="text" label="Email" inputChange={inputChange} errors={errors}></Input>

                <Input name="phone" type="text" label="Phone" inputChange={inputChange} errors={errors}></Input>

                <Input name="password" type="password" label="Password" inputChange={inputChange} errors={errors}></Input>

                <Input name="confirmPassword" type="password" label="Confirm Password" inputChange={inputChange} errors={errors}></Input>

                <button disabled={disabled}>Submit</button>

            </form> */}
        </div>
    )
}