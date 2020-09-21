import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './LogIn'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

export default function AuthPage() {
    const [page, changePage] = useState('SignUp')



    return (
        <div>
            <Router>
                {/* <Link to="login">Login</Link> */}
                {page==='SignUp' ? <Link id="login" to={'/login'} onClick={()=>changePage('login')}> Have an account? Login!</Link> : <Link id="signup" to={'/signup'} onClick={()=> changePage('Login')}>Sign up</Link>}

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


            </Router>
        </div>
    )
}