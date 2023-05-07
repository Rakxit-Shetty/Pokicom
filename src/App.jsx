import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/CounterSlice'
import PokemonSee from "./components/PokemonSee";

const App = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
       
      {/* Hello World
      <div>
        <button  onClick={() => dispatch(increment())}>INC</button>
        <i>{"        "+count+"   "}</i>
        <button  onClick={() => dispatch(decrement())}> DEC</button>
      </div> */}

     <PokemonSee/>
    </>
  );
};

export default App;
