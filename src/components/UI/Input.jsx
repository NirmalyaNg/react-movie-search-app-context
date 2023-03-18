import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return <input className={`${classes.input} ${props.className}`} {...props.config} />;
};

export default Input;
