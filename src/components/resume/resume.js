import React, { Component } from 'react';

import Skill from './skillListItem';

class Resume extends Component {
  skills = ['arduino', 'c++', 'c#', 'react', 'electronics', 'javascript'];

  // skills = ['photoshop', 'illustrator', 'wordpress', 'css', 'html5', 'jquery'];

  render() {
    return (
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{this.props.data.collegeEducation.college}</h3>
                <p className="info">
                  {this.props.data.collegeEducation.degree} <span>•</span>{' '}
                  <em className="date">
                    {this.props.data.collegeEducation.date}
                  </em>
                </p>
                <p>{this.props.data.collegeEducation.summary}</p>
              </div>
            </div>{' '}
            {/* item end */}
            {/* <div className="row item">
              <div className="twelve columns">
                <h3>School of Cool Designers</h3>
                <p className="info">
                  B.A. Degree in Graphic Design <span>•</span>{' '}
                  <em className="date">March 2003</em>
                </p>
                <p>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                  odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                </p>
              </div>
            </div>{' '} */}
            {/* item end */}
          </div>{' '}
          {/* main-col end */}
        </div>{' '}
        {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>{this.props.data.workPlace1.company}</h3>
                <p className="info">
                  {this.props.data.workPlace1.jobTitle} <span>•</span>{' '}
                  <em className="date">{this.props.data.workPlace1.date}</em>
                </p>
                <p>
                  <span>•</span> {this.props.data.workPlace1.summary.point1}
                </p>
                <p>
                  <span>•</span> {this.props.data.workPlace1.summary.point2}
                </p>
              </div>
            </div>{' '}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>{this.props.data.workPlace2.company}</h3>
                <p className="info">
                  {this.props.data.workPlace2.jobTitle}
                  <span>•</span>{' '}
                  <em className="date">{this.props.data.workPlace2.date}</em>
                </p>
                <p>
                  <span>•</span> {this.props.data.workPlace2.summary.point1}
                </p>
                <p>
                  <span>•</span> {this.props.data.workPlace2.summary.point2}
                </p>
                <p>
                  <span>•</span> {this.props.data.workPlace2.summary.point3}
                </p>
              </div>
            </div>{' '}
            {/* item end */}
          </div>{' '}
          {/* main-col end */}
        </div>{' '}
        {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                {this.skills.map(curVal => (
                  <Skill data={curVal} />
                ))}
              </ul>
            </div>
            {/* end skill-bars */}
          </div>{' '}
          {/* main-col end */}
        </div>{' '}
        {/* End skills */}
      </section>
    );
  }
}

export default Resume;
