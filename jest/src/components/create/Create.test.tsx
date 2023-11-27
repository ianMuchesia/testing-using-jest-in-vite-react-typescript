import '@testing-library/jest-dom';

import {  fireEvent, render, screen } from "@testing-library/react"
import Create from "./Create"


describe("Create component", () => {

    const setTodosMock = jest.fn()
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock calls before each test
      });
    
    it("should render correctly", () => {
        render(<Create setTodos={()=>{}}/>)
        expect(true).toBeTruthy()
    })

    test("should render input element and button elements",()=>{
        render(<Create setTodos={()=>{}}/>)
        const inputElements = screen.queryAllByTestId("create-input")

        expect(inputElements.length).toBe(1)

        const buttonElements = screen.getByText(/Add Todo/i)

        expect(buttonElements).toBeInTheDocument()
    })


    it("trigger the handleAddTodo function when the button is clicked",()=>{
  

        render(<Create setTodos={setTodosMock}/>)

        //type text into the input element
        const inputElement = screen.getByTestId("create-input")
        fireEvent.change(inputElement,{
            target:{
                value:"New Todo"
            }
        })

        const buttonElement = screen.getByText(/Add Todo/i)

        fireEvent.click(buttonElement)
    
        expect(setTodosMock).toHaveBeenCalledWith(expect.any(Function))
    })

    it ("should clear the input field when the button is clicked",()=>{
        

        render(<Create setTodos={setTodosMock}/>)

        //type text into the input element
        const inputElement = screen.getByTestId("create-input")
        fireEvent.change(inputElement,{
            target:{
                value:"New Todo"
            }
        })

        const buttonElement = screen.getByText(/Add Todo/i)

        fireEvent.click(buttonElement)

        expect(inputElement).toHaveValue("")
    })
   
    test("should not add a todo when the input field is empty",()=>{
 

        render(<Create setTodos={setTodosMock}/>)

        const buttonElement = screen.getByText(/Add Todo/i)

        fireEvent.click(buttonElement)

        expect(setTodosMock).not.toHaveBeenCalled()

    })

    test("it has an item when the button is clicked",()=>{
    

        render(<Create setTodos={setTodosMock}/>)

        const inputElement = screen.getByTestId("create-input")
        fireEvent.change(inputElement,{
            target:{
                value:"New Todo"
            }
        })

        const buttonElement = screen.getByText(/Add Todo/i)

        fireEvent.click(buttonElement)

        expect(setTodosMock).toHaveBeenCalled()

   


    })


})