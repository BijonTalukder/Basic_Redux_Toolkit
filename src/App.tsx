import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"

function App() {
  const {count} = useSelector((state:RootState)=>state.counter)
 const dispatch = useDispatch()

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>increment</button>
      {count}
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>decrement</button>
    </div>
  )
}

export default App
