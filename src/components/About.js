import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <div class="col-xs-9">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
          </div>
          <div class="col-xs-3" style={{textAlign:'left'}}>
            <p>Consectetur non velit pariatur mollit commodo sint et exercitation consectetur enim eiusmod ut excepteur elit.</p>
          </div>
      </div>
    );
  }
}

export default About;