import React, { useContext } from 'react';
import CounterContext from '../../store/counter-context';
import classes from './Modal.module.css';

const ModalContent = props => {
  const counterCtx = useContext(CounterContext);

  return (
    <div className={`${classes['modal-overlay']}`}>
      <div className={`${classes['modal-count']}`}>
        <div>Current Count</div>
        <div>{counterCtx.currentCount}</div>
      </div>
    </div>
  );
};

export default ModalContent;
