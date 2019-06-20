import React from 'react';
import SignUp from './SignUp';
import '../App.css'

class IntroContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="row body_content">
        <div class="col-xs-8 video_content">

        </div>
        <div class="col-xs-4 sign_up_content">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default IntroContent;