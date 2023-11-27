import { useState } from "react";
import { TypeTodo } from "../../@types";

interface SingleTodoProp{
    setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;

    todo: TypeTodo;
}
const SingleTodo = ({setTodos, todo}:SingleTodoProp) => {

    
    const [done, setDone] = useState(false)
    const handleDoneTodo=()=>{
        setTodos(prevTodos=>prevTodos.map((item)=>{
            if(item.id === todo.id){
                return {...item,done:!item.done}
            }
            return item;
        }))
        setDone(!done)

    }


    const handleDelete = ()=>{
        setTodos(prevTodos=>prevTodos.filter((item)=>item.id !== todo.id))
    }
  return (
    <div className="border-2 border-gray-200" data-testid="single-component">
      
        <div className="flex justify-around m-2">
        <h1 className={`text-2xl font-bold m-3 underline ${done && "line-through"}`}>{todo.todo}</h1>
        <div className="flex gap-3">
     { !done &&  <button className="bg-green-400 rounded-sm px-3 py-2 text-lg" onClick={handleDoneTodo}>{!done?"Mark Completed":null}</button>}
            <button className="bg-red-400 rounded-sm px-3 py-2 text-lg" onClick={handleDelete}>Delete</button>
        </div>
           
        </div>
    </div>
  )
}

export default SingleTodo