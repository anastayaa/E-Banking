import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Background from '../../background.jpg';

//import { connect } from "react-redux";
//import PropTypes from "prop-types";

class Landing extends Component {

  
    render() {
        return (
            <div className="landing">
              <div className="light-overlay landing-inner text-dark">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h3 className="display-4 mb-4">
                      YOUR MONEY. YOUR IMPACT
                      </h3>
                      <p className="lead">
                       whenever and wherever you want !
                      </p>
                      <hr />
                      <Link 
                      className="btn btn-lg mr-2" 
                      style={{backgroundColor:'#EB5C09',color:'white'}}
                      to="/login">
                        S'Authentifier
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}



export default Landing;
