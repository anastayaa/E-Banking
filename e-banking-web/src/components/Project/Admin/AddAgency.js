import React, { Component } from 'react';
 import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addAgency} from '../../../actions/Admin/agencyActions';
import classnames from "classnames"; 
//import "react-notifications-component/dist/theme.css";
class AddAgency extends Component {
    
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      phone:"",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newAgency = {
      name: this.state.name,
      address: this.state.address,
      phone:this.state.phone,
    };
     this.props.addAgency(newAgency,this.props.history); 
  }
      
  render() {

        const { errors } = this.state;
        return (
          <div>
            <div className="Agency">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>New Agency</small></h1>
                    <hr />
                    <br/><br/>
                    <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.name
                          })}
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
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
                          "is-invalid": errors.address
                        })}
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}
                      />
                      {errors.address && (
                        <div className="invalid-feedback">{errors.address}</div>
                      )}
                    </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                      <div className="col">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Phone"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.phone
                        })}
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
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

    AddAgency.propTypes = {
      addAgency: PropTypes.func.isRequired,
      errors: PropTypes.object.isRequired,
    };


    
    const mapStateToProps = state => ({
      errors: state.errors
    });
    
    export default connect(mapStateToProps,{ addAgency } )(AddAgency);
