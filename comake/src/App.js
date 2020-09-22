import React from 'react';
import LandingPage from './components/landingpage'

import './App.css';
import AuthPage from './components/AuthPage'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, BrowserRouter } from "react-router-dom";
import {PrivateRoute} from './utils/privateRoute'

import {UpdateIssue} from './components/updateissue'


function App() {
  return (
    <Router>
    <div className="App">
      
      

      <AuthPage></AuthPage>
      {/* <PrivateRoute path = '/dashboard' component = {LandingPage}/> */}
      <Route path = '/dashboard' component = {LandingPage}/>
      <Route 
      path = '/dashboard/ticket/update'
      render = {() => <UpdateIssue />}
      >
      </Route>
      

    </div>
     
    </Router>
  );
}

export default App;
