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
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/Admin/securityActions";
import SecuredRoute from './securityUtils/SecuredRoute';


function App() {

  const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}
  return (
  <Provider store={store}>
  <div className="App">
  <Router>
  <Header/>
  {
    //Public Routes
  }

  <Route exact path="/" component={Landing} />
  <Route exact path="/login" component={Login} />

  {
    //Private Routes
  }
 
  {
    //Private Routes
  }
  <Switch>
  <SecuredRoute exact path="/agencydashboard" component={AgencyDashboard} />
  <SecuredRoute exact path="/agentdashboard" component={AgentDashboard} />
  <SecuredRoute exact path="/addagent" component={AddAgent} />
  <SecuredRoute exact path="/updateAgent/:identifier" component={UpdateAgent} />
  <SecuredRoute exact path="/viewAgent/:identifier" component={ViewAgent} />
  <SecuredRoute exact path="/updateAgency/:id" component={UpdateAgency} />
  <SecuredRoute exact path="/viewAgency/:id" component={ViewAgency} />
  <SecuredRoute exact path="/addagency" component={AddAgency} />
  </Switch>
  </Router>
  </div>
  </Provider>
  );
}

export default App;
