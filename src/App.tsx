
import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/Store'

function App() {
  const {count} = useSelector((state: RootState) => state.counter)
 

  return (
    
      <div>
        <div>
          <button>Increment</button>
          <div>{count}</div>
          <button>Decrement</button>
        </div>
      </div>
 
  
  )
}

export default App
