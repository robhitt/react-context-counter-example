import React, { useReducer } from 'react';
import CounterContext from './counter-context';

const defaultCounterState = {
  currentCount: 0,
};

const counterReducer = (state, action) => {
  if (action.type === 'INCREASE_COUNT') {
    const updatedAmount = state.currentCount + action.increment;
    return {
      currentCount: updatedAmount,
    };
  } else if (action.type === 'DECREASE_COUNT') {
    const updatedAmount = state.currentCount + action.increment;
    return {
      currentCount: updatedAmount,
    };
  }
};

const CounterProvider = props => {
  const [counterState, dispatchCounterAction] = useReducer(
    counterReducer,
    defaultCounterState
  );

  const increaseCountHandler = () => {
    dispatchCounterAction({
      type: 'INCREASE_COUNT',
      increment: 1,
    });
  };

  const decreaseCountHandler = () => {
    dispatchCounterAction({
      type: 'DECREASE_COUNT',
      increment: -1,
    });
  };

  const counterContext = {
    currentCount: counterState.currentCount,
    increaseCount: increaseCountHandler,
    decreaseCount: decreaseCountHandler,
  };

  return (
    <CounterContext.Provider value={counterContext}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
