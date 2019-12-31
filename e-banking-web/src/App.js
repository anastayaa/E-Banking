import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Landing from './components/Layout/Landing';
import Dashboard from './components/Project/Dashboard';
import Login from './components/Project/Login';


function App() {
  return (
  <div className="App">
  <Router>
  <Header/>
  <Route exact path="/" component={Landing} />
  <Route exact path="/dashboard" component={Dashboard} />
  <Route exact path="/login" component={Login} />
  </Router>
  </div>
  );
}

export default App;
