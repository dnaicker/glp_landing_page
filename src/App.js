import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

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

      <div class="row">
        <div class="col-xs-8"> 
          <div class="colx-xs-8">
          </div>
          <div class="colx-xs-4">
          </div>
        </div>
        <div class="col-xs-4"> 
          <form>            
            <div class="form-group">
              <input placeholder="email" class="form-control" />
            </div>
            <div class="form-group">
              <input placeholder="password" class="form-control" />
            </div>
            <div class="form-group">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>

            
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2019 Copyright: ThinkLead: Global Leadership Platform
        </div>
      </footer>

    </div>
  );
}

export default App;