import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getAgent,deleteAgent} from '../../../actions/Admin/agentActions';
import { confirmAlert } from 'react-confirm-alert'; 
//import ReactNotification from "react-notifications-component";
//import  Dialog from 'react-bootstrap-dialog';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ViewAgent extends Component {


    constructor() {
        super();
        };

        alerting = (identifier) => {
          confirmAlert({
            title: "Confirm deletion",
            message: "Are you sure to do this.",
            buttons: [
              {
                label: "Yes",
                onClick: () => {this.props.deleteAgent(identifier,this.props.history)}
              },
              {
                label: "No",
      
              }
            ]
          });
        };

       componentDidMount()
       {
        const { identifier } = this.props.match.params;
        this.props.getAgent(identifier);
       }

       

          render() {
            const agent=this.props.agent;
             const details = {
              name:((agent || {}).agency || {}).name,
              address:((agent || {}).agency || {}).address,
              city:((agent || {}).agency || {}).city,
              phone:((agent || {}).agency || {}).phone,
             } 
             
            return (
              <div className="demand">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <h1><small style={{color:'#EB5C09'}}>Details</small></h1>
                      <hr />
                      <br/>
                      <br/>
                      </div>
                      <div  className="col-md-12 m-auto">

                      <div className="row">
                        <div className="col">
                        <h3 className="text-left"><small>Infos agent</small></h3>
                        <hr/>
                        </div>
                     </div>
                     <div className="row">
                       <div className="col">
                        <h4 className="text-left"><small>Identifier</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Firstname</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Lastname</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Email</small></h4>
                        </div>
                     </div>

                     <div className="row">
                       <div className="col">
                        <h5 className="text-left">{agent.identifier}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{agent.firstName}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{agent.lastName}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{agent.email}</h5>
                        </div>
                     </div>
                     <br/><br/>

                     <div className="row">
                     <div className="col">
                     <h3 className="text-left"><small>Agency</small></h3>
                     <hr/>
                     </div>
                  </div>

                     <div className="row">
                       <div className="col">
                        <h4 className="text-left"><small>Agency name</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Agency address</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Agency phone</small></h4>
                        </div>
                     </div>

                     <div className="row">
                       <div className="col">
                        <h5 className="text-left">{details.name}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{details.address}-{details.city}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{details.phone}</h5>
                        </div>
                     </div>
                
                     <br/><br/>
                     <hr/>
                     <div className="row justify-content-end">
                     
                      <div className="col-md-3">
                      <Link to={`/viewAgent/${agent.identifier}`}
                        onClick={()=>this.alerting(agent.identifier)}
                        className="btn  btn-block mt-4"
                        style={{backgroundColor:'#f2f2f2',color:'#EB5C09'}}>
                        <span className="fas fa-times"/>{' '}
                        Delete agent
                     </Link>
                     </div>
                    
                      <div className="col-md-2">
                      <Link to={`/updateAgent/${agent.identifier}`}
                       className="btn text-white btn-block mt-4"
                        style={{backgroundColor:'#EB5C09'}}>
                        <span className="fas fa-edit"/>{' '}
                        Edit
                     </Link>
                     </div>
                     
                      </div>
                      <br/>
                  </div>
                </div>
              </div>
            </div>  
            );
          }
}

ViewAgent.propTypes = {

    agent:PropTypes.object.isRequired,
    getAgent: PropTypes.func.isRequired,
    deleteAgent: PropTypes.func.isRequired,
  };


  
  const mapStateToProps = state => ({
    agent: state.agent.agent
  });
  
  export default connect(mapStateToProps,{getAgent,deleteAgent} )(ViewAgent);
