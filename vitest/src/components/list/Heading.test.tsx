import { render } from "@testing-library/react"
import Heading from "./Heading"



describe("heading component", ()=>{
    it('renders "No items" when there are no todos', () => {
        const { getByText } = render(<Heading todos={[]} />);
        expect(getByText('No items')).toBeInTheDocument(); // Fix: Update to 'No items'
      });


    it('renders "List Item" when there is one todo', () => {
        const { getByText } = render(<Heading todos={[{id:"1", todo:"test", done:false, date:"", time:""}]} />);
        expect(getByText('List Item')).toBeInTheDocument(); // Fix: Update to 'List Item'
      })

        it('renders "List Items" when there are more than one todo', () => {
            const { getByText } = render(<Heading todos={[{id:"1", todo:"test", done:false, date:"", time:""}, {id:"2", todo:"test", done:false, date:"", time:""}]} />);
            expect(getByText('List Items')).toBeInTheDocument(); // Fix: Update to 'List Items'
        })
      
})