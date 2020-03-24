import React from 'react';
import logo from './logo.svg';
import './App.css';

import About from './components/about/about';
import Contact from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Testimonials from './components/testimonials/testimonials';

import headerData from './components/header/headerData';
import aboutData from './components/about/aboutData';
import resumeData from './components/resume/resumeData';
import portfolioData from './components/portfolio/portfolioData';
// import testimonialData from './components/testimonials/testimonialData';
import contactData from './components/contactus/contactData';
import footerData from './components/footer/footerData';

function App() {
  return (
    <div>
      <Header data={headerData}/>
      <About data={aboutData}/>
      <Resume data={resumeData}/>
      <Portfolio data={portfolioData} />
      {/* <Testimonials data={testimonialData} /> */}
      <Contact data={contactData} />
      <Footer data={footerData} />
    </div>
  );
}

export default App;
