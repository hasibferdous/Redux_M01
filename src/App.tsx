
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/Store'
import { decrement, increment, incrementByAmount } from './redux/Features/Counter/CounterSlice'

function App() {
  const {count} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    
      <div>
        <div>
          <button onClick={()=> dispatch(increment())}>Increment</button>
          <button onClick={()=> dispatch(incrementByAmount(5))}>Increment by value</button>
          <div>{count}</div>
          <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
      </div>
 
  
  )
}

export default App
