
import './App.css'
import Counter from './Counter'
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter'
function App() {

const count = useAppSelector(state => state.counter)
const dispatch = useAppDispatch()
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>dispatch(increment())} style={{marginRight:'8px'}}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <Counter />
    </>
  )
}

export default App
