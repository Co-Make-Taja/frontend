import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import Input from './Input'
// import UseIsMount, { useIsMount } from './UseIsMount'

export default function SignUp() {

    const data = {
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }

    const [errors, setErrors] = useState({ ...data })
    const [fieldData, changeData] = useState({ ...data })

    const [disabled, setDisabled] = useState(true)

    // const isMount = useIsMount(errors)

    const schema = Yup.object().shape({
        username: Yup.string().required("Please enter a name."),
        email: Yup.string().required("Please enter an email.").email("This email is not valid."),
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
            .catch((error)=>{})
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

    return (
        <div>
            <h2>Sign up</h2>

            <form>
                {/* <label>
                    Username
                    <input name="username" onChange={inputChange}></input>
                </label>
                <br />
                <span>{errors.username ? errors.username : null}</span> */}
                <Input name="username" type="text" label="Username" inputChange={inputChange} errors={errors}></Input>

                <Input name="email" type="text" label="Email" inputChange={inputChange} errors={errors}></Input>
                {/* <label>
                    Email
                    <input name="email" onChange={inputChange}></input>
                </label>
                <span>{errors.email ? errors.username : null}</span>
                <br /> */}
                <Input name="phone" type="text" label="Phone" inputChange={inputChange} errors={errors}></Input>
                {/* <label>
                    Phone
                    <input name="phone" onChange={inputChange}></input>
                </label>
                <span>{errors.phone ? errors.phone : null}</span>
                <br /> */}

                {/* <label>
                    Password
                    <input type="password" name="password" onChange={inputChange}></input>
                </label>
                <span>{errors.password ? errors.password : null}</span>
                <br /> */}

                <Input name="password" type="password" label="Password" inputChange={inputChange} errors={errors}></Input>

                {/* <label>
                    Confirm Password
                    <input type="password" name="confirmPassword" onChange={inputChange}></input>
                </label>
                <span>{errors.confirmPassword ? errors.confirmPassword : null}</span>
                <br /> */}

                <Input name="confirmPassword" type="password" label="Confirm Password" inputChange={inputChange} errors={errors}></Input>

                <button disabled={disabled}>Submit</button>

            </form>
        </div>
    )
}