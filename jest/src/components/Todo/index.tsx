import { useState } from "react"
import Create from "../create/Create"
import List from "../list/List"
import { TypeTodo } from "../../@types"

const Todo = () => {


    const [ todos , setTodos ] = useState<TypeTodo[]>([])
  return (
   <div className="flex flex-col gap-3 p-3 items-center justify-center mt-10 border-2 border-gray-300 rounded-lg">
   <Create  setTodos={setTodos}/>
   <List todos={todos} setTodos={setTodos}  />
   </div>
  )
}

export default Todo