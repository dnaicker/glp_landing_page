import React from 'react';
import logo from "../assets/icon-57x57.png";

class Navbar extends React.Component {

  render() {
    return (

      <nav class="navbar navbar-default custom_navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="btn navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand navbar_logo" rel="home" href="#" title="ThinkLead">
              <img class="navbar_logo_img"src={logo} />
            </a>
            <span class="navbar-brand navbar_title">
              GLOBAL LEADERSHIP <br />
              <span class="navbar_sub_title">PLATFORM</span> <br />
            </span>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form class="navbar-form navbar-right" autocomplete="off" style={{marginTop: '20px', marginRight: '-30px'}}>
              <div class="form-group login_email" >
                <input autocomplete="off" type="text" class="form-control input_field" placeholder="Email" />
              </div>
              <div class="form-group login_password">
                <input autocomplete="off" type="password" class="form-control input_field" placeholder="Password" />
              </div>
              <button type="submit" class="btn btn-default btn_login">Login</button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;