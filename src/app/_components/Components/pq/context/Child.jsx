import { MyContext } from "./MyContext"
import { useContext } from "react"
const Child = () => {
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

export default Child
