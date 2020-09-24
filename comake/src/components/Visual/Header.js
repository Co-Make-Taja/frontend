import React from 'react'
import '../Styles.css'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function Header (){
    return(

        <header>
            <nav class="menu-bar">
                <ul>
                    <li><a href="https://youthful-pare-d60ecb.netlify.app/index.html">Home</a></li>
                    
                    {localStorage.getItem("token") ?                    
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    :
                    <li><Link to={"/signup"}>Sign Up</Link></li>
                    }
                    
                    {localStorage.getItem("token") ?
                    <li><Link to={"/login"}>Logout</Link></li>              
                    :
                    <li><Link to={"/login"}>Login</Link></li>
                    }
                    </ul>
            </nav>
        </header>

    )
}