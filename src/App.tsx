import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
//   const {count} = useSelector((state:RootState)=>state.counter)
//  const dispatch = useDispatch()

//best practice ti below
const {count} = useAppSelector((state:RootState)=>state.counter)
 const dispatch = useAppDispatch()

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
