import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {deleteAgency} from '../../../actions/Admin/agencyActions';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

class ListAgencies extends Component {
   
   constructor()
   {
     super();
   }
   alerting = (id) => {
    confirmAlert({
      title: "Confirm deletion",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteAgency(id,this.props.history)
        },
        {
          label: "No",

        }
      ]
    });
  }; 

    render() {
        const agencies=this.props.agencies
        return (
            <div>

           

            <div className="col-md-12 m-auto">
            <table id="tablePreview" className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {agencies.map(agency => (
                <tr key={agency.id}>
                  <th>{agency.name}</th>
                  <th>{agency.address}</th>
                  <th>{agency.city}</th>
                  <th>{agency.phone}</th>
                  <th>
                     <Link to={`/viewAgency/${agency.id}`}>
                     <span className="fas fa-eye"
                      title="Details"
                     />
                    </Link>
                     {' '}
                     
                     <Link to={`/updateAgency/${agency.id}`}>
                     <span className="fas fa-edit text-warning"
                      title="Edit"
                     />
                    </Link>
                    {' '}
                    <Link to="/agencydashboard"  >
                    <span className="fas fa-times text-danger"
                     onClick={()=>this.alerting(agency.id)}
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

 ListAgencies.propTypes = {
  deleteAgency: PropTypes.func.isRequired
}; 

export default connect(null,{deleteAgency})(ListAgencies);
