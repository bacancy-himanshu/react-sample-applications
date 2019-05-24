import React from 'react';
import './Person.css'
const person = (props) => {
  return (
    <div className='Person'>
      <p>This is {props.name} and I've been {props.place} and came back alive </p>
      <p>{props.children}</p>

    </div>
  )
  //<input type="text" onChange={props.changed} />
};

export default person;