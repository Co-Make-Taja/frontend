import React from 'react'
import '../Styles.css'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function Header (){
    return(

        <header>
            <nav class="menu-bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><Link to={"/signup"}>Sign Up</Link></li>
                    </ul>
            </nav>
        </header>

    )
}