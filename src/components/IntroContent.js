import React from 'react';
import SignUp from './SignUp';
import '../App.css'
import About from './About'

class IntroContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="body_content">
        <div class="col-md-8 video_content">
          <About />
        </div>
        <div class = "col-md-4 sign_up_content">
          <SignUp />
        </div>
      </div>
    );
  }
}

export default IntroContent;