import React, { Component } from 'react'
import { Link } from "react-router-dom";
import BurgerKing from "../Project/Admin/BurgerKing";
//import PropTypes from "prop-types";
//import { connect } from "react-redux";




class Header extends Component {

    

    render() {
       
        return (
            <div className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor:'#EB5C09'}}>
            <div className="container">
                <BurgerKing className="navbar-brand">OK</BurgerKing>
                <Link className="navbar-brand" to="/dashboard">
                     Dashboard
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                      
                            <Link className="nav-link" to="">
                                Add demand
                            </Link>
                          
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

  
  export default Header;
