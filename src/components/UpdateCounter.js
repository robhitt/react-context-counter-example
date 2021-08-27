import React, { Fragment, useContext } from 'react';
import CounterContext from '../store/counter-context';
import ShowCount from './ShowCount';
import Button from './UI/Button';

const UpdateCounter = props => {
  const counterCtx = useContext(CounterContext);

  return (
    <Fragment>
      <Button onClick={counterCtx.increaseCount}>Increase Count</Button>
      <Button onClick={counterCtx.decreaseCount}>Decrease Count</Button>
      <div>
        <ShowCount />
      </div>
    </Fragment>
  );
};

export default UpdateCounter;
