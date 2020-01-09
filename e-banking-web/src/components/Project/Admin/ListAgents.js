import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteAgent} from '../../../actions/Admin/agentActions';
import { confirmAlert } from 'react-confirm-alert'; 
//import 'react-confirm-alert/src/react-confirm-alert.css';

class ListAgents extends Component {
   
   constructor()
   {
     super();
   }
   alerting = (identifier) => {
    confirmAlert({
      title: "Confirm deletion",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteAgent(identifier,this.props.history)
        },
        {
          label: "No",

        }
      ]
    });
  }; 

    render() {
        const agents=this.props.agents
        return (
            <div>
            <div className="col-md-12 m-auto">
            <table id="tablePreview" className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Identifier</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Agency name</th>
                  <th>Agency address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {agents.map(agent => (
                <tr key={agent.id}>
                  <th>{agent.identifier}</th>
                  <th>{agent.firstName}</th>
                  <th>{agent.lastName}</th>
                  <th>{agent.email}</th>
                  <th>{agent.agency.name}</th>
                  <th>{agent.agency.address}</th>
                  <th>
                     <Link to={`/viewAgent/${agent.identifier}`}>
                     <span className="fas fa-eye"
                      title="Details"
                     />
                    </Link>
                     {' '}
                     
                     <Link to={`/updateAgent/${agent.identifier}`}>
                     <span className="fas fa-edit text-warning"
                      title="Edit"
                     />
                    </Link>
                    {' '}
                    <Link to="/agentdashboard">
                    <span className="fas fa-times text-danger"
                     onClick={()=>this.alerting(agent.identifier)}
                     title="Delete"
                    />
                   </Link>
                  </th>
                </tr>
                ))} 
              </tbody>
            </table>
            </div>
            </div>
        )
    }
}

 ListAgents.propTypes = {
  deleteAgent: PropTypes.func.isRequired
}; 

export default connect(null,{deleteAgent})(ListAgents);
