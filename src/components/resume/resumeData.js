let resumeData = {
  collegeEducation: {
    college: 'City College of New York',
    degree: "Bachelor's in Electrical Engineering",
    date: 'Expected May 2021',
    summary: [
      'Relevant Courses: Communication Theory, Semiconductors, Computer Design, ',
      'C++ Object Oriented Programming in Engineering Setting'
    ].join('')
  },
  workPlace1: {
    company: 'Nova XR Media',
    jobTitle: 'Software Engineering Intern',
    date: 'May 2019 - Present',
    summary: {
      point1: [
        'Created an immersive Web Virtual Reality experience for customers to take',
        'a trip around Levant using an interactive mini map that teleports the user ',
        'to 360deg pictures and videos of various locations in Levant \n'
      ].join(''),
      point2: [
        'Utilized knowledge of Express and Node.js to create a virtual server and ',
        'host the experience live on the NovaXR website domain for public display to ',
        'customers and potential clients'
      ].join('')
    }
  },
  workPlace2: {
    company: 'Zahn Innovation Center',
    jobTitle: 'Electrical Engineering Apprentice',
    date: 'Feb 2019 - Present',
    summary: {
      point1: [
        'Responsible for managing multiple client-requested projects at the same ',
        'time to provide clients with transparent service and solutions to their ',
        'projects according to their deadlines '
      ].join(''),
      point2: [
        'Utilize 3D printers, laser printers, and various electronic components ',
        'to create innovative and cost-effective projects for clients such as ',
        'light-up shoelaces, R2D2, backpack parachute, etc. '
      ].join(''),
      point3: [
        'Presented Arduino workshops to the City College community, teaching me ',
        'to effectively plan and present to interested students in Arduino ',
        'fundamentals and hands-on projects'
      ].join('')
    }
  }
};

export default resumeData;
