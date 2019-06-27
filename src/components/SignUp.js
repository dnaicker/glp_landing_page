import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="">
          <div class="col-xs-12" >
            <h1 class="sign_up_title">Create a new Account</h1>
          </div>

          <div class="col-xs-12"> 
            <form style={{textAlign: 'left'}}>            
              <div class="form-group">
                <input placeholder="Email" class="form-control" />
              </div>
              <div class="form-group">
                <input placeholder="Password" class="form-control" />
              </div>            
              <div class="form-group" style={{marginTop: '35px'}}>
                <button class="btn btn-default"> Sign in</button>
              </div>            
              <div class="form-group" style={{marginTop: '10px'}}>
                <button class="btn btn-danger"> Sign up with Google </button>
              </div>
            </form>
          </div>        
      </div>
    );
  }
}

export default SignUp;