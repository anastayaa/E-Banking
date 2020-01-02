
import React, { Component } from 'react'

class BurgerKing extends React.Component {
    showSettings (event) {
        event.preventDefault();
    
      }

  render () {
    
    return (
        <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="/agencydashboard">Agencies</a></li>
                <li><a href="/agentdashboard">Agents</a></li>
                <li><a href="">Reporting</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerKing;