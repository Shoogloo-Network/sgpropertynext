
import { useContext } from 'react'
import { MyContext } from './MyContext'
const Child2 = () => {
    const {text , setText} = useContext(MyContext);
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      {
        text
      }
    </div>
  )
}

export default Child2
