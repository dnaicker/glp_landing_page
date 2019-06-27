import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="">
          <div class="col-xs-12" >
            <h1 class="sign_up_title">CREATE A NEW <br/>ACCOUNT</h1>
          </div>

          <div class="col-xs-12"> 
            <form style={{textAlign: 'left'}}>            
              <div class="form-group">
                <input placeholder="Email" class="form-control login_input" />
              </div>
              <div class="form-group">
                <input placeholder="Password" class="form-control login_input" />
              </div>            
              <div class="form-group" style={{marginTop: '35px'}}>
                <button class="btn btn_sign_up"> Sign up</button> 
                <span style={{paddingLeft: '10px', paddingRight: '10px'}}>or</span> 
                <button class="btn btn-danger"> Sign up with Google </button>
              </div>            
              <div class="form-group" style={{marginTop: '10px'}}>
                
              </div>
            </form>
          </div>        
      </div>
    );
  }
}

export default SignUp;