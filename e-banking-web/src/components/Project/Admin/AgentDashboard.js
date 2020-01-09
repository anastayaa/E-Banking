import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ListAgents from '../Admin/ListAgents';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAgents} from '../../../actions/Admin/agentActions';
import {getAgencies} from '../../../actions/Admin/agencyActions';
//import {getDemands,getDemandsByConditions} from '../../actions/demandActions';
import ReactNotification from "react-notifications-component";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class AgentDashboard extends Component {

  constructor() {
    super();

    /* this.state = {
      numCompte:"",
      status:"",
      date1:"",
      date2:""
    }; 

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);*/
    //this.notificationDOMRef = React.createRef();
  }

  componentDidMount() {
      
    this.props.getAgencies();
    this.props.getAgents();
    const location=this.props.location;
    if(location==="/addagent") this.addNotification()
    else if(location!=="") this.editNotification() 
    
  } 

  addNotification=()=>{
    store.addNotification({
     title: "Success",
     message: "agent created succefully!",
     type: "success",
     insert: "top",
     container: "top-center",
     animationIn: ["animated", "fadeIn"],
     animationOut: ["animated", "fadeOut"],
     dismiss: { duration: 2000 },
     dismissable: { click:true },

   })
 }
 editNotification=()=>{
  store.addNotification({
   title: "Success",
   message: "agent updated succefully!",
   type: "success",
   insert: "top",
   container: "top-center",
   animationIn: ["animated", "fadeIn"],
   animationOut: ["animated", "fadeOut"],
   dismiss: { duration: 2000 },
   dismissable: { click:true },

 })
} 


    render() {
      const {agents}=this.props.agent;
      const {agencies}=this.props.agency;
        return (
            <div>
            <div className="agent">
            <ReactNotification/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>Agents List</small></h1>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col">
                    <select name="identifier" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                       <option value="-1" disabled>Identifier</option>
                          {agents.map(agent => (
                            <option value={agent.identifier}  key={agent.id}>{agent.identifier}</option>
                            ))
                          }
                    </select>
                      </div>
                      <div className="col">
                      <select name="email" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                      <option value="-1" disabled>Email</option>
                         {agents.map(agent => (
                        <option value={agent.identifier}  key={agent.id}>{agent.email}</option>
                       ))
                       }
             </select>
             </div>
                      <div className="col">
                           <select name="agency_name" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                             <option value="-1" disabled>Agency name</option>
                              {agencies.map(agency => (
                               <option value={agency.name}  key={agency.id}>{agency.name}</option>
                              ))
                              }
                    </select>
                      </div>
                      <div className="col">
                      <select name="address" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                      <option value="-1" disabled>Agency address</option>
                         {agencies.map(agency => (
                        <option value={agency.name}  key={agency.id}>{agency.address
                        }</option>
                       ))
                       }
                      </select>
                      </div>
                      </div>
                      <div className="row justify-content-end">
                      <div className="col-md-2">
                      <button
                        type="submit"
                        className="btn text-white btn-block mt-4"
                        style={{backgroundColor:'#EB5C09'}}
                      >
                      <span className="fas fa-search"/>{' '}
                      Find Agent
                      </button>
                      </div>
                      </div>
                      <br/>
                      <div className="row justify-content-start">
                      <div className="col-md-2">
                      <Link className="nav-link" to="/addagent">
                      <button
                      className="btn text-white btn-block mt-4"
                      //type="submit"
                      style={{backgroundColor:'#EB5C09'}}
                    >
                    Add Agent
                    </button>
                      </Link>
                      </div>
                      </div>
                      <br/>
                      <div className="row">
                      <div className="col">
                      <ListAgents agents={agents} history={this.props.history}/>
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

AgentDashboard.propTypes = {
  //getAccounts: PropTypes.func.isRequired,
  //account: PropTypes.object.isRequired,
  //demand: PropTypes.object.isRequired,
  getAgents: PropTypes.func.isRequired,
  getAgencies: PropTypes.func.isRequired,
  //getDemandsByConditions:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //account: state.account,
  agency: state.agency,
  agent: state.agent,
  location:state.location.previousLocation
});

export default connect(mapStateToProps,{getAgents,getAgencies})(AgentDashboard);