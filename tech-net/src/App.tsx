import { decrement, increament, increamentByValue } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increament())} className="btn bg-gray-900 text-white my-2">Increment</button>
        <br />
        <button onClick={() => dispatch(decrement())} className="btn bg-gray-900 text-white my-2">Decrement</button>
        <br />
        <button onClick={() => dispatch(increamentByValue(5))} className="btn bg-gray-900 text-white my-2">IncrementByValue</button>
      </div>
    </>
  );
}

export default App;
