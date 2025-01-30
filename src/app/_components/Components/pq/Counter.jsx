
import useCounter from './useCounter'
const Counter = () => {
    const {count , increment , decrement} = useCounter(0);
  return (
    <div>
      <button onClick={()=>increment(2)}>
        Click Me +
      </button>
      <button onClick={()=>decrement(2)}>
        Click Me -
      </button>
      {count}
    </div>
  )
}

export default Counter
