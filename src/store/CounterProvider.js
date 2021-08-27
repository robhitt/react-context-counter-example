import React, { useReducer } from 'react';
import CounterContext from './counter-context';

const defaultCounterState = {
  currentCount: 0,
  modalIsOpen: false,
};

const counterReducer = (state, action) => {
  if (action.type === 'INCREASE_COUNT') {
    const updatedAmount = state.currentCount + action.increment;
    return {
      ...state,
      currentCount: updatedAmount,
    };
  } else if (action.type === 'DECREASE_COUNT') {
    const updatedAmount = state.currentCount + action.increment;
    return {
      ...state,
      currentCount: updatedAmount,
    };
  } else if (action.type === 'OPEN_MODAL') {
    const updatedModalState = true;
    return {
      ...state,
      modalIsOpen: updatedModalState,
    };
  } else if (action.type === 'CLOSE_MODAL') {
    const updatedModalState = false;
    return {
      ...state,
      modalIsOpen: updatedModalState,
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

  const openModalHandler = () => {
    dispatchCounterAction({
      type: 'OPEN_MODAL',
      modalState: true,
    });
  };

  const closeModalHandler = () => {
    dispatchCounterAction({
      type: 'CLOSE_MODAL',
      modalState: false,
    });
  };

  const counterContext = {
    currentCount: counterState.currentCount,
    modalIsOpen: counterState.modalIsOpen,
    increaseCount: increaseCountHandler,
    decreaseCount: decreaseCountHandler,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };

  return (
    <CounterContext.Provider value={counterContext}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
