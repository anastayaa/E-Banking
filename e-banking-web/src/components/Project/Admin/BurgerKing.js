
import React, { Component } from 'react'

class BurgerKing extends React.Component {
    showSettings (event) {
        event.preventDefault();
    
      }

  render () {
    
    return (
        <div class="menu-wrap">
        <input type="checkbox" class="toggler"/>
        <div class="hamburger"><div></div></div>
        <div class="menu">
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