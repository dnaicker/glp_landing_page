import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
    );
  }
}

export default SignUp;