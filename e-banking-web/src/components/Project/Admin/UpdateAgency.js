import React, { Component } from 'react';
 import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addAgency,getAgencyById} from '../../../actions/Admin/agencyActions';
import classnames from "classnames"; 

class UpdateAgency extends Component {
    
    constructor() {
      super();
  
      this.state = {
        id:"",
        name: "",
        address: "",
        phone:"",
        errors: {}
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    componentWillReceiveProps(nextProps) {
          
        const {
          id,
          name,
          city,
          address,
          phone
        } = nextProps.agency;
        this.setState({
            id,
            name,
            city,
            address,
            phone
          });

    }  
    componentDidMount()
    {
     const { id } = this.props.match.params;
     //console.log(JSON.stringify(this.props.agency))
     this.props.getAgencyById(id,this.props.history);
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
      e.preventDefault();
      const newAgency = {
        id:this.state.id,
        name: this.state.name,
        city:this.state.city,
        address: this.state.address,
        phone:this.state.phone,
      };
       this.props.addAgency(newAgency,this.props.history); 
    }
        
    render() {
  
          const { errors } = this.state;
          const agency=this.props.agency;
          //console.log(agency.id)
          return (
            <div>
              <div className="Agency">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1><small style={{color:'#EB5C09'}}>Update Agency</small></h1>
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
                              "is-invalid": errors.name
                            })}
                            placeholder="City"
                            name="city"
                            value={this.state.city}
                            onChange={this.onChange}
                          />
                          {errors.city && (
                            <div className="invalid-feedback">{errors.city}</div>
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
                          value="Update"
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
  
      UpdateAgency.propTypes = {
        agency: PropTypes.object.isRequired,
        addAgency: PropTypes.func.isRequired,
        getAgencyById: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
      };
  
  
      
      const mapStateToProps = state => ({
        agency: state.agency.agency,
        errors: state.errors
      });
      
      export default connect(mapStateToProps,{ addAgency,getAgencyById } )(UpdateAgency); 


