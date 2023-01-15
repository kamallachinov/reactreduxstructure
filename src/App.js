import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Actions/Actions';
import Navbarr from './Components/Navbarr';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <>
      <Navbarr />
      <h1>Counter: {counter}</h1>
      {isLogged ? <h3>There is valuable information</h3> : "You don't logged in"}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
