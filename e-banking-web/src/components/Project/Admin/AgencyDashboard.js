import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ListAgencies from '../Admin/ListAgencies';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAgencies,getAgenciesByConditions} from '../../../actions/Admin/agencyActions';
import ReactNotification from "react-notifications-component";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class AgencyDashboard extends Component {

  constructor() {
    super();

     this.state = {
      name:"",
      address:""
    }; 

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

    this.props.getAgencies(); 
     const location=this.props.location;
    if(location==="/addagency") this.addNotification()
    else if(location!=="") this.editNotification() 
  } 

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.getAgenciesByConditions(this.state);
  }

 addNotification=()=>{
    store.addNotification({
     title: "Success",
     message: "agency created succefully!",
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
   message: "agency updated succefully!",
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

      const {agencies}=this.props.agency;
        return (
            <div>
            <div className="agent">
            <ReactNotification/>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>Agencies List</small></h1>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className="row">
                      <div className="col">
                           <select name="name" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                           <option value={'-1'}  disabled>Agency name</option>
                           {agencies.map(agency => (
                              <option value={agency.name}  key={agency.id}>{agency.name}</option>
                              ))
                              }
                    </select>
                      </div>
                      <div className="col">
                      <select name="address" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                      <option value="-1" disabled>Address</option>
                         {agencies.map(agency => (
                        <option value={agency.address}  key={agency.id}>{agency.address
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
                      Find Agency
                      </button>
                      </div>
                      </div>
                      <br/>
                      <div className="row justify-content-start">
                      <div className="col-md-2">
                      <Link className="nav-link" to="/addagency">
                      <button
                      className="btn text-white btn-block mt-4"
                      type="submit"
                      style={{backgroundColor:'#EB5C09'}}
                    >
                    Add Agency
                    </button>
                      </Link>
                      </div>
                      </div>
                      <br/>
                      <div className="row">
                      <div className="col">
                      
                      <ListAgencies agencies={agencies} history={this.props.history}/>
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

AgencyDashboard.propTypes = {
  getAgencies: PropTypes.func.isRequired,
  getAgenciesByConditions:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  agency: state.agency,
  location:state.location.previousLocation
});

export default connect(mapStateToProps,{getAgencies,getAgenciesByConditions})(AgencyDashboard);
