import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div class="col-xs-12">
            <div class="embed-responsive embed-responsive-16by9" style={{marginBottom:'20px'}}>
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ji8Q0TC5iVk"></iframe>
            </div>
          </div>
        </div>
        <div >
          <div class="col-xs-4" style={{textAlign:'left'}}>
            <p>Leadership Platform is a specialist organisation. And all involved here are specialist leadership analysts, strategists, authors, and development consultants.</p> 
          </div>
          <div class="col-xs-4" style={{textAlign:'left'}}>
            <p> There are many organisations that claim to develop leaders, but when one digs deeper one finds that their focus is blurred by a desire to provide insight into too many areas and fields, and so they remain on the periphery of true leadership understanding. </p> 
          </div>
          <div class="col-xs-4" style={{textAlign: 'left'}}>
          <p>
          We have a legacy that includes literally hundreds of interviews with top national and international leaders (all above are included) from business and civil society, a radio show, a featured slot on Summit TV, multiple appearances in print publications including CEO Magazine, Management Today, Leadership Magazine, Succeed Magazine, Journal of Marketing, Argus, Star Newspaper, Business Day, and Sunday Times, and over 15 years and thousands of hours of training and consulting experience.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;