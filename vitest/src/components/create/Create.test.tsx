import { fireEvent, render, screen } from "@testing-library/react"
import Create from "./Create"

describe("create component",()=>
{
    it("renders without crashing",()=>{
        render(<Create setTodos={()=>{}}/>)
       
    
    })

     it("renders input and button elements",async()=>{
         render(<Create setTodos={() => {}} />);
        const inputElements = screen.queryAllByTestId('create-input');
        const buttonElement = screen.getByText(/add todo/i);
      
   
      
        // Check that there is only one input element
        expect(inputElements).toHaveLength(1);
      
        // Check that the button element is present
        expect(buttonElement).toBeInTheDocument();
          })
    
        it("adds todo when button is clicked",()=>{
            const mockSetTodos = jest.fn();
            render(<Create setTodos={mockSetTodos}/>)

            const inputElement = screen.getByTestId('create-input');
            const addButton = screen.getByText(/add todo/i)

            // Type a todo in the input
    fireEvent.change(inputElement, { target: { value: 'New Todo' } })
          
    // Click the "Add Todo" button
    fireEvent.click(addButton);
    expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function))

 // Extract the function passed to setTodos and call it with an empty array
    const setTodosFunction = mockSetTodos.mock.calls[0][0];
    setTodosFunction([]);



    // Check if the setTodos function adds a new todo with the expected properties
    expect(mockSetTodos).toHaveBeenCalledWith([
        {
          id: expect.any(String),
          todo: 'New Todo',
          date: 'null',
          time: 'null',
          done: false,
        },
      ]);

        })

         


          
  
     })   