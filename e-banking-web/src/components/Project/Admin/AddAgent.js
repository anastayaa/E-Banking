import React, { Component } from 'react';
import {getAgencies} from '../../../actions/Admin/agencyActions';
import {getAgency} from '../../../actions/Admin/agencyActions';
import {addAgent} from '../../../actions/Admin/agentActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from "classnames"; 
import "react-notifications-component/dist/theme.css";
class AddAgent extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email:"",
      agency:{'test':true},
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

       componentDidMount() {
        this.props.getAgencies();
      }
      componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        if(e.target.name==="agency")
        this.props.getAgency(e.target.value);
      }
      onSubmit(e) {
        e.preventDefault();
        const newAgent = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email:this.state.email,
          agency: JSON.parse(this.state.agency),
        };
        console.log(this.props.history.location.pathname)
         this.props.addAgent(newAgent,this.props.history); 
      }
    
      render() {
        const {agencies}=this.props.agency;
        const agency=this.props.agency.agency;
        const { errors } = this.state;
        
        return (
          <div>
            <div className="Agent">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>New Agent</small></h1>
                    <hr />
                    <br/><br/>
                    <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.firstName
                           })}
                          placeholder="Firstname"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                      </div>
                      <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.lastName
                           })}
                          placeholder="Lastname"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                      </div> 
                      </div>
                      <br/><br/>
                      <div className="row">

                      <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          className={classnames("form-control form-control-lg", {
                           "is-invalid": errors.email
                          })}
                          placeholder="xyz@example.com"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        { errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>

                      <div className="col">
                      <select name="agency" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}
                      >
                        <option value="-1" disabled>Agency Name</option>
                        { agencies.map(agency => (
                          <option 
                           value={JSON.stringify(agency)}
                            key={agency.id} 
                          >{agency.name}-{agency.address}-{agency.city}</option>
                         )) }
                      </select>
                     </div>
                     
                      </div>
                      <br/><br/>
                      <input
                        type="submit"
                        value="Add"
                        className="btn text-white btn-block mt-4"
                        style={{backgroundColor:'#EB5C09'}}  
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    AddAgent.propTypes = {
      agency: PropTypes.object.isRequired,
      getAgencies: PropTypes.func.isRequired,
      getAgency: PropTypes.func.isRequired,
      addAgent: PropTypes.func.isRequired,
      errors: PropTypes.object.isRequired,
    };


    
    const mapStateToProps = state => ({
      agency: state.agency,
      errors: state.errors
    });
    
    export default connect(mapStateToProps,{ getAgencies,getAgency,addAgent } )(AddAgent);

