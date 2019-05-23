import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>This is {props.name} and I've been {props.place} and came back alive </p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;