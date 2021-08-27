import React from 'react';

const CounterContext = React.createContext({
  currentCount: 0,
  increaseCount: () => {},
  decreaseCount: () => {},
});

export default CounterContext;
