import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAccounts,getAccount} from '../../actions/accountActions';
import {createDemand} from '../../actions/demandActions';*/
import classnames from "classnames"; 
//import "react-notifications-component/dist/theme.css";
class AddAgency extends Component {
    
      render() {
    
        return (
          <div>
            <div className="Agency">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>New Agency</small></h1>
                    <hr />
                    <br/><br/>
                    <form>
                    <div className="row">
                    <div className="col">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Name"
                          name="name" 
                        />
                      </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                      <div className="col">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Address"
                        name="address" 
                      />
                    </div>
                      </div>
                      <br/><br/>
                      <div className="row">
                      <div className="col">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Phone"
                        name="phone" 
                      />
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

    export default AddAgency;
