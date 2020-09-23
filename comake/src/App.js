import React from 'react';
import LandingPage from './components/landingpage'

import './App.css';
import AuthPage from './components/AuthPage'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, BrowserRouter } from "react-router-dom";
import {PrivateRoute} from './utils/privateRoute'

import {UpdateIssue} from './components/updateissue'
import { NewIssue } from './components/newissue';


function App() {
  return (
    <Router>
    <div className="App">
      
      

      <AuthPage></AuthPage>
      <Switch>
      {/* <PrivateRoute path = '/dashboard' component = {LandingPage}/> */}
      <Route 
        path = '/dashboard' component = {LandingPage}/>
      
      <Route 
      path = '/update-issue/:id'
      render = {() => <UpdateIssue />}
      >
      </Route>

      <Route
      path = '/new-issue' component = {NewIssue}>        
      </Route>
      <Route
      path = '/issues' component = {UpdateIssue}>        
      </Route>
      </Switch>

    </div>
     
    </Router>
  );
}

export default App;
