import { TypeTodo } from "../../@types";
import SingleTodo from "../SingleTodo/SingleTodo"
import Heading from "./Heading";

interface listProp {
  setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;

  todos: TypeTodo[]
}
const List = ({ setTodos, todos }: listProp) => {


  return (
    <div className="w-full h-full border-2 border-gray-300">
   <Heading todos={todos} />
      <div className="flex flex-col gap-3 p-2 mt-3">
        {
          todos.length > 0 && todos.map((todo) => <SingleTodo todo={todo} setTodos={setTodos} key={todo.id} />)
        }

      </div>

    </div>
  )
}

export default List