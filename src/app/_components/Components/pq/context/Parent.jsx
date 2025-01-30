
import { useState } from 'react'
import Child from './Child'
import { MyContext } from './MyContext'
import Child2 from './Child2';
const Parent = () => {
    const [text , setText] = useState('');
  return (
    <MyContext.Provider value={{text,setText}}>
      <Child/>
      <Child2/>
    </MyContext.Provider>
  )
}

export default Parent
