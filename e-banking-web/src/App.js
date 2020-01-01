import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Landing from './components/Layout/Landing';
import AgencyDashboard from './components/Project/Admin/AgencyDashboard';
import AgentDashboard from './components/Project/Admin/AgentDashboard';
import Login from './components/Project/Login';
import AddAgent from './components/Project/Admin/AddAgent';
import AddAgency from './components/Project/Admin/AddAgency';


function App() {
  return (
  <div className="App">
  <Router>
  <Header/>
  <Route exact path="/" component={Landing} />
  <Route exact path="/agencydashboard" component={AgencyDashboard} />
  <Route exact path="/agentdashboard" component={AgentDashboard} />
  <Route exact path="/addagent" component={AddAgent} />
  <Route exact path="/addagency" component={AddAgency} />
  <Route exact path="/login" component={Login} />
  </Router>
  </div>
  );
}

export default App;
