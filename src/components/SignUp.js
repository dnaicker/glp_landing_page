import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div class="col-xs-10" >
            <h1 class="sign_up_title">Create a new account</h1>
          </div>
        </div>
        <div>
          <div class="col-xs-12"> 
            <form style={{textAlign: 'left'}}>            
              <div class="form-group">
                <input placeholder="First Name" class="form-control login_input" />
              </div> 
              <div class="form-group">
                <input placeholder="Last Name" class="form-control login_input" />
              </div> 
              <div class="form-group">
                <input placeholder="Email" class="form-control login_input" />
              </div>
              <div class="form-group">
                <input placeholder="Password" type="password" autcomplete="off" class="form-control login_input" />
              </div>      

              <div class="form-group">
                <div class="checkbox">
                  <label><input type="checkbox" value=""/>I agree to the GLP's Terms & Conditions</label>
                </div>
              </div>      
                    
              <div class="form-group" style={{marginTop: '35px'}}>
                <button class="btn btn_sign_up"> Sign up</button> 
                <span style={{paddingLeft: '10px', paddingRight: '10px'}}>or</span> 
                <button class="btn btn-danger"> Sign up with Google </button>
              </div>                          
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SignUp;