import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react"
import List from "./List"



describe("List component", () => {

    const setTodosMock = jest.fn()
    it("should render correctly", () => {
        render(<List setTodos={setTodosMock} todos={[]}/>)
        expect(true).toBeTruthy()
    })


    it("should render heading component",()=>{
        render(<List setTodos={setTodosMock} todos={[]}/>)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument()
    })

    it("renders each single todo component correctly",()=>{
      render(<List setTodos={setTodosMock} todos={[{id:"1",todo:"todo",date:"date",time:"time",done:false}]}/>)
        const singleTodoElement = screen.queryAllByTestId("single-component")
       
        expect(singleTodoElement.length).toBe(1)
    })

    it("should render no todo message when there is no todo",()=>{
        render(<List setTodos={setTodosMock} todos={[]}/>)
        const noTodoElement = screen.queryAllByTestId("single-component")
        expect(noTodoElement.length).toBe(0)
    })

    test("it should pass setTodos function to each component",()=>{
        const todos = [
            { id: "1", todo: "Todo 1", done: false ,date:"date",time:"time"},
            { id: "2", todo: "Todo 2", done: true ,date:"date",time:"time"},
            // Add more todos as needed
          ];
        render(<List setTodos={setTodosMock} todos={todos}/>)
       
       // Now, assert that setTodosMock has been called for each todo
  todos.forEach((todo) => {
    expect(setTodosMock).toHaveBeenCalledWith(
      expect.any(Function),
      expect.objectContaining({
        id: todo.id,
        todo: todo.todo,
        done: todo.done,
        date: expect.any(String),
        time: expect.any(String),
      })
    );
  });

  // Optionally, you can check the number of calls
  expect(setTodosMock).toHaveBeenCalledTimes(todos.length);

    })
})