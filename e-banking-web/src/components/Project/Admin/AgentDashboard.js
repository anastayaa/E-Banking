import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import ListDemand from './ListDemand';
//import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import {getAccounts} from '../../actions/accountActions';
//import {getDemands,getDemandsByConditions} from '../../actions/demandActions';
//import ReactNotification from "react-notifications-component";

class AgentDashboard extends Component {


    render() {
        
        return (
            <div>
            <div className="agent">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 m-auto">
                  <h1><small style={{color:'#EB5C09'}}>Agents List</small></h1>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <div className="row">
                    <div className="col">
                    <select name="numCompte" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                             <option value="-1" disabled>Identifier</option>
                             <option value="">a</option>
                             <option value="">b</option>
                             <option value="">c</option>
                                {//accounts.map(account => (
                               //<option value={account.numCompte}  key={account.id}>{account.numCompte}</option>
                              // ))
                              }
                    </select>
                      </div>
                      <div className="col">
                      <select name="numCompte" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                      <option value="-1" disabled>Email</option>
                      <option value="">a</option>
                      <option value="">b</option>
                      <option value="">c</option>
                         {//accounts.map(account => (
                        //<option value={account.numCompte}  key={account.id}>{account.numCompte}</option>
                       // ))
                       }
             </select>
             </div>
                      <div className="col">
                           <select name="numCompte" defaultValue={'-1'} className="form-control form-control-lg" onChange={this.onChange}>
                             <option value="-1" disabled>Agency name</option>
                             <option value="CIH">CIH</option>
                             <option value="BP">Banque populaire</option>
                             <option value="SG">Societé génerale</option>
                                {//accounts.map(account => (
                               //<option value={account.numCompte}  key={account.id}>{account.numCompte}</option>
                              // ))
                              }
                    </select>
                      </div>
                      <div className="col">
                        <input
                          className="form-control form-control-lg"
                          placeholder="Agency City"
                          name="agency_city"
                          type="text" 
                         // onChange={this.onChange}
                        //value={this.state.date1}
                        />
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
                      Find Agent
                      </button>
                      </div>
                      </div>
                      <br/>
                      <div className="row justify-content-start">
                      <div className="col-md-2">
                      <Link className="nav-link" to="/addagent">
                      <button
                      className="btn text-white btn-block mt-4"
                      //type="submit"
                      style={{backgroundColor:'#EB5C09'}}
                    >
                    Add Agent
                    </button>
                      </Link>
                      </div>
                      </div>
                      <br/>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


  
  export default AgentDashboard;