import React, {Component} from 'react';
import Grid from './Grid';
import '../style/style.css';
import {BrowserRouter as Router,Link} from "react-router-dom";
import $ from 'jquery';
import './Home/Home';
window.jQuery=$;
window.$=$;
global.jQuery=$;

class App extends Component{
  render(){
    return(
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link to="" className="navbar-brand"> <img src={require('../logo/logo.png')} className="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <Link to="" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMO
                  </Link>
                  <div class="dropdown-menu" aria-labelledBy="navbarDropdown">
                    <Link to="" class="dropdown-item">PROMO</Link>
                    <Link to="" class="dropdown-item">Partnership</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PAKET & ADD-ON
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="" className="dropdown-item">Action</Link>
                    <Link to="" className="dropdown-item">Another Action</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="" className="dropdown-item">something else here</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white">PUSAT BANTUAN</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="">
          <Grid/>
          {/* <Home/> */}
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
