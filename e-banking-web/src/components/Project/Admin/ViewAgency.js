import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {getAgencyById,deleteAgency} from '../../../actions/Admin/agencyActions';
import { confirmAlert } from 'react-confirm-alert'; 
//import ReactNotification from "react-notifications-component";
//import  Dialog from 'react-bootstrap-dialog';
import 'react-confirm-alert/src/react-confirm-alert.css';

class ViewAgency extends Component {


    constructor() {
        super();
        };

        alerting = (id) => {
          confirmAlert({
            title: "Confirm deletion",
            message: "Are you sure to do this.",
            buttons: [
              {
                label: "Yes",
                onClick: () => {this.props.deleteAgency(id,this.props.history)}
              },
              {
                label: "No",
      
              }
            ]
          });
        };

       componentDidMount()
       {
        const { id } = this.props.match.params;
        this.props.getAgencyById(id);
       }

       

          render() {
            const agency=this.props.agency;
            /* const details = {
              numClient:(((demand || {}).compte || {}).abonne||{}).id,
              firstname:(((demand || {}).compte || {}).abonne||{}).nom,
              lastname:(((demand || {}).compte || {}).abonne||{}).prenom,
              password:(((demand || {}).compte || {}).abonne||{}).password,
              numCompte:((demand || {}).compte || {}).numCompte,
              devise:((demand || {}).compte || {}).devise,
              dateCreation:demand.dateCreation,
              status:demand.status,
              type:demand.type
             } */
             
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
                        <h3 className="text-left"><small>Infos agency</small></h3>
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
                        <h5 className="text-left">{agency.name}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{agency.address}-{agency.city}</h5>
                        </div>
                        <div className="col">
                        <h5 className="text-left">{agency.phone}</h5>
                        </div>
                     </div>
                     <br/>

                     <div className="row">
                        <div className="col">
                        <h3 className="text-left"><small>Dates</small></h3>
                        <hr/>
                        </div>
                     </div>

                     <div className="row">
                       <div className="col">
                        <h4 className="text-left"><small>Creation date</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>Last update</small></h4>
                        </div>
                        <div className="col">
                        <h4 className="text-left"><small>{''}</small></h4>
                        </div>
                     </div>

                     <div className="row">
                       <div className="col">
                       <h5 className="text-left">{agency.createdAt}</h5>
                        </div>
                        {'  '}
                        <div className="col">
                        <h5 className="text-left">{agency.updatedAt}</h5>
                        </div>
                        <div className="col">
                   
                        </div>
                     </div>
                     <br/><br/>
                     <hr/>
                     <div className="row justify-content-end">
                     
                      <div className="col-md-3">
                      <Link to={`/viewAgency/${agency.id}`}
                        onClick={()=>this.alerting(agency.id)}
                        className="btn  btn-block mt-4"
                        style={{backgroundColor:'#f2f2f2',color:'#EB5C09'}}>
                        <span className="fas fa-times"/>{' '}
                        Delete agency
                     </Link>
                     </div>
                    
                      <div className="col-md-2">
                      <Link to={`/updateAgency/${agency.id}`}
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

ViewAgency.propTypes = {

    agency:PropTypes.object.isRequired,
    getAgencyById: PropTypes.func.isRequired,
    deleteAgency: PropTypes.func.isRequired,
  };


  
  const mapStateToProps = state => ({
    agency: state.agency.agency
  });
  
  export default connect(mapStateToProps,{getAgencyById,deleteAgency} )(ViewAgency);
