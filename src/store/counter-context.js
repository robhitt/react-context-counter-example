import React from 'react';

const CounterContext = React.createContext({
  currentCount: 0,
  modalIsOpen: false,
  openModal: () => {},
  closeModal: () => {},
  increaseCount: () => {},
  decreaseCount: () => {},
});

export default CounterContext;
