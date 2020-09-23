import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './LogIn'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Header from './Visual/Header'
import Footer from './Visual/Footer'

export default function AuthPage() {
    // const [page, changePage] = useState('SignUp')

    return (
        <div>
            {/* <Header></Header> */}

            {/* <Router> */}
            <Header></Header>
            <section class="inner">



                <Switch>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>

                <Switch>

                    {/* REPLACE THE PATH WITH THE SIGNUP PATH */}
                    <Route path="/signup">
                        <SignUp></SignUp>
                    </Route>
                </Switch>



            </section>

            <Footer>

            </Footer>
            {/* </Router> */}
        </div>
    )
}