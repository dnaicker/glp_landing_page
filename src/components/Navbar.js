import React from 'react';

class Navbar extends React.Component {

  render() {
    return (

      <nav class="navbar navbar-default custom_navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <span class="navbar-brand">ThinkLead</span>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form class="navbar-form navbar-right" autocomplete="off">
              <div class="form-group login_email" >
                <input autocomplete="off" type="text" class="form-control input_field" placeholder="email" />
              </div>
              <div class="form-group login_password">
                <input autocomplete="off" type="password" class="form-control input_field" placeholder="password" />
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