import React from 'react';

const skill = props => {
  let classType = '';
  if (props.data == 'c++') {
    classType = 'cpp';
  } 
  else if (props.data == 'c#') {
    classType = 'cs';
  }
  else {
    classType = props.data;
  }
  return (
    <li>
      <span className={`bar-expand ${classType}`} />
      <em>{props.data}</em>
    </li>
  );
};

export default skill;
