import React, { useContext } from 'react';
import CartContext from '../store/counter-context';
import classes from './CountDisplay.module.css';

const CountDisplay = props => {
  const counterCtx = useContext(CartContext);
  console.log(counterCtx.currentCount);

  return <div className={classes.container}>{counterCtx.currentCount}</div>;
};

export default CountDisplay;
