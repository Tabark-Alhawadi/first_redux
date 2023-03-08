import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch()
  const inc = () =>{
    dispatch({type : 'inc'})
  }
  const dec = () =>{
    dispatch({type : 'dec'})
  }
  const add = () =>{
    dispatch({type : 'add',addValue:100})
  }
  return (
    <>
    <h2>{counter}</h2>
<button onClick={inc}>+</button>
<button onClick={dec}>-</button>
<button onClick={add}>Add value</button>
</>
  );
}

export default App;
