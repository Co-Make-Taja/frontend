import React from 'react'
import SignUp from './SignUp'
import Login from './LogIn'
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from "react-router-dom";

export default function AuthPage(){

    return (
        <div>
            <SignUp></SignUp>
            <Login></Login>
        </div>
    )
}