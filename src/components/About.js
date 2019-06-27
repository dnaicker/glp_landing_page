import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
            <div class="col-xs-11">
              <div class="embed-responsive embed-responsive-16by9" style={{marginBottom:'20px'}}>
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
              </div>
            </div>
        </div>
        <div>
          <div class="col-xs-11" style={{textAlign:'left'}}>
            <p>Fugiat nisi est ea non in non non deserunt cillum culpa officia nostrud in eu cupidatat elit ut minim id quis eu est sit reprehenderit qui nulla et. Fugiat nisi est ea non in non non deserunt cillum culpa officia nostrud in eu cupidatat elit ut minim id quis eu est sit reprehenderit qui nulla et.</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default About;