import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-1" ></div>
          <div class="col-xs-10" >
            <h1 class="sign_up_title">Create new Account</h1>
          </div>
          <div class="col-xs-1" ></div>
        </div>

        <div class="row">
          <div class="col-xs-1" ></div>
          <div class="col-xs-10"> 
            <form>            
              <div class="form-group">
                <input placeholder="Email" class="form-control" />
              </div>
              <div class="form-group">
                <input placeholder="Password" class="form-control" />
              </div>            
            </form>
          </div>        
          <div class="col-xs-1" ></div>
        </div>

        <div class="row">
          <div class="col-xs-1" ></div>
          <div class="col-xs-1">
            <div class="form-group">
              <button class="btn btn-default">Sign Up</button>
            </div>
          </div>
          <div class="col-xs-10" ></div>
        </div>

        <div class="row">
          <div class="col-xs-1" ></div>
          <div class="col-xs-1">
            <div class="form-group">
              <button class="btn btn-danger">
                Sign up with Google</button>
            </div>
          </div>
          <div class="col-xs-10" ></div>
        </div>
      </div>
    );
  }
}

export default SignUp;