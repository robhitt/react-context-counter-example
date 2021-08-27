import React from 'react';
import classes from './Button.module.css';

const Button = props => (
  <button
    className={classes.button}
    onClick={props.onClick}
    type={props.type || 'button'}
  >
    {props.children}
  </button>
);

export default Button;
