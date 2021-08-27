import React from 'react';
import './App.css';
import CounterProvider from './store/CounterProvider';
import CountDisplay from './components/CountDisplay';
import UpdateCounter from './components/UpdateCounter';

const App = () => {
  return (
    <CounterProvider>
      <div className='App'>
        <CountDisplay />
        <UpdateCounter />
      </div>
    </CounterProvider>
  );
};

export default App;
