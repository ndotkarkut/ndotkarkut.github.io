import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {this.props.data.summary}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{this.props.data.details.name}</span>
                  <br />
                  <span>
                  {this.props.data.details.street}
                    <br />
                    {this.props.data.details.city}
                  </span>
                  <br />
                  <span>{this.props.data.details.phone}</span>
                  <br />
                  <span>{this.props.data.details.email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}

export default About;
