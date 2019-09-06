import React, { Component } from 'react';
import logo from './git.png';
// import 'bootstrap/dist/css/bootstrap';

class Header extends Component {
    constructor () {
        super()

        this.onClick = this.onClick.bind(this);
      }



onClick () {



}

    render() { 
        return (
            <div id='header'>
                 <div class ="NavBAR">
                <nav class="navbar navbar-dark bg-dark"> 
                  <div class="container">
                      <h2>React GitHub API </h2>
                      <a class="navbar-brand" href="#"  >Home</a>
                      <a class="navbar-brand" href='#' onClick={this.onClick} >whos going to win? </a>
                  </div>
          
                </nav>

              </div>
                <img src={logo} alt="Logo" />
            </div>
        )
    }
}
 
export default Header;

