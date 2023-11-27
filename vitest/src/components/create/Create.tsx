import { useState } from "react";
import { TypeTodo } from "../../@types"
import { v4 as uuidv4 } from 'uuid';

interface typeCreate {

    setTodos: React.Dispatch<React.SetStateAction<TypeTodo[]>>;
}
const Create = ({ setTodos }: typeCreate) => {

    const [create, setCreate] = useState("")


    const handleAddTodo = () => {
        if (create === "") return;
        const newTodo: TypeTodo = {
            id: uuidv4(),
            todo: create,
            date: "null",
            time: "null",
            done: false,

        }

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setCreate("")

    }

    return (
        <div className="border-2 border-gray-300 w-full ">
            <h1 className="text-2xl font-bold m-3 underline">Create</h1>
            <input type="text" className="bg-gray-300 m-3 rounded-sm px-3 py-2 text-lg" placeholder="create" value={create} onChange={(e) => setCreate(e.target.value)}
            data-testid="create-input"
             />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default Create