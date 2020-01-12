import React from 'react';
import logo from './logo.svg';
import store from  './store';
import {Provider} from 'react-redux';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import "react-notifications-component/dist/theme.css";
import Header from './components/Layout/Header';
import Landing from './components/Layout/Landing';
import AgencyDashboard from './components/Project/Admin/AgencyDashboard';
import AgentDashboard from './components/Project/Admin/AgentDashboard';
import Login from './components/Project/Login';
import AddAgent from './components/Project/Admin/AddAgent';
import AddAgency from './components/Project/Admin/AddAgency';
import UpdateAgency from './components/Project/Admin/UpdateAgency';
import UpdateAgent from './components/Project/Admin/UpdateAgent';
import ViewAgency from './components/Project/Admin/ViewAgency';
import ViewAgent from './components/Project/Admin/ViewAgent';


function App() {
  return (
  <Provider store={store}>
  <div className="App">
  <Router>
  <Header/>
  <Route exact path="/" component={Landing} />
  <Route exact path="/agencydashboard" component={AgencyDashboard} />
  <Route exact path="/agentdashboard" component={AgentDashboard} />
  <Route exact path="/addagent" component={AddAgent} />
  <Route exact path="/updateAgent/:identifier" component={UpdateAgent} />
  <Route exact path="/viewAgent/:identifier" component={ViewAgent} />
  <Route exact path="/updateAgency/:id" component={UpdateAgency} />
  <Route exact path="/viewAgency/:id" component={ViewAgency} />
  <Route exact path="/addagency" component={AddAgency} />
  <Route exact path="/login" component={Login} />
  </Router>
  </div>
  </Provider>
  );
}

export default App;
