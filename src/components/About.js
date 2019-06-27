import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xs-1"></div>
          <div class="col-xs-8">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div>
          </div>
          <div class="col-xs-3">
            <p>Consectetur non velit pariatur mollit commodo sint et exercitation consectetur enim eiusmod ut excepteur elit.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;