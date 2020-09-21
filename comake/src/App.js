import React from 'react';
import LandingPage from './components/landingpage'

import './App.css';
import AuthPage from './components/AuthPage'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";


function App() {
  return (
 
    <div className="App">
      <LandingPage />
</div>

 
  );
}

export default App;
