import {useState} from 'react'

const useCounter = (initialVal ) => {
const [count , setCount] = useState(initialVal);

const increment = (steps)=>{
    setCount(count + steps);

}

const decrement  = (steps)=>{
    setCount(count - steps);
}
  return { count , increment , decrement };
}

export default useCounter
