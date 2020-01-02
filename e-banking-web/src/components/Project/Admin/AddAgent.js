import React, { Component } from 'react';
import {getAgencies} from '../../../actions/Admin/agencyActions';
import {addAgent} from '../../../actions/Admin/agentActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from "classnames"; 
//import "react-notifications-component/dist/theme.css";
class AddAgent extends Component {

  constructor() {
    super();

    this.state = {
      motif: "",
      status: "registred",
      type:"",
      compte: {'test':true},
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

       componentDidMount() {
        this.props.getAccounts();
      }
      componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        if(e.target.name==="compte")
        this.props.getAccount(e.target.value);
       // console.log(e.target.name);
      }
      onSubmit(e) {
        e.preventDefault();
        const newDemand = {
          motif: this.state.motif,
          status: this.state.status,
          type:this.state.type,
          compte: JSON.parse(this.state.compte),
        };
         this.props.createDemand(newDemand,this.props.history); 
      }
    
      render() {
    
        return (
          <div>
            <div className="Agent">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>New Agent</small></h1>
                    <hr />
                    <br/><br/>
                    <form>
                    <div className="row">
                    <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Firstname"
                          name="firstname" 
                        />
                      </div>
                      <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Lastname"
                          name="Lastname" 
                        />
                      </div> 
                      </div>
                      <br/><br/>
                      <div className="row">

                      <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          className={classnames("form-control form-control-lg", {
                           // "is-invalid": errors.motif
                          })}
                          placeholder="xyz@example.com"
                          name="email"
                        />
                        {/* errors.motif && (
                          <div className="invalid-feedback">{errors.motif}</div>
                        )*/}
                      </div>

                      <div className="col">
                      <select name="agency" defaultValue={''} className="form-control form-control-lg"
                      className={classnames("form-control form-control-lg", {
                      //  "is-invalid": errors.type
                      })}
                      >
                        <option value="" disabled>Agency Name</option>
                         <option value="classic">CIH</option>
                         <option value="wallet">BNP</option>
                         <option value="correspondence">BP</option>
                      </select>
                      {/* errors.type && (
                        <div className="invalid-feedback">{errors.type}</div>
                      ) */}
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

    export default AddAgent;
