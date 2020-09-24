import React from 'react';
import LandingPage from './components/landingpage'

import './components/Styles.css';
import AuthPage from './components/AuthPage'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, BrowserRouter } from "react-router-dom";
import {PrivateRoute} from './utils/privateRoute'

import {UpdateIssue} from './components/updateissue'
import { NewIssue } from './components/newissue';
import Footer from './components/Visual/Footer'
import LogIn from './components/LogIn'
import Login from './components/LogIn';
import {AddComment} from './components/addComment'


function App() {
  return (
    <Router>
    <div className="App">
      
      

      <AuthPage></AuthPage>
      
      <Switch>
      
      <PrivateRoute path = '/dashboard' component = {LandingPage}/>
      {/* <Route 
        path = '/dashboard' component = {LandingPage}/>       */}
      
      <Route
      path = '/update-issue/:id'
      render = {() => <UpdateIssue />}
      >
      </Route>
      <Route
      path = '/add-comment/:id'
      render = {() => <AddComment />}
      >
      </Route>

      <Route
      path = '/new-issue' component = {NewIssue}>        
      </Route>
      <Route
      path = '/issues' component = {UpdateIssue}>        
      </Route>
      </Switch>
      <Footer></Footer>

    </div>
     
    </Router>
  );
}

export default App;
