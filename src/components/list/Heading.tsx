import { TypeTodo } from "../../@types"

interface HeadingProp{
    todos:TypeTodo[];
}
const Heading = ({todos}:HeadingProp) => {
  return (
    <h1 className="underline text-3xl">{todos. length===1?"List Item":(todos.length>1)?"List Items":"No items"}</h1>
  )
}

export default Heading