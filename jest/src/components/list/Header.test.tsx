import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react"
import Heading from "./Heading"


describe("Header component",()=>{
  it("should render correctly",()=>{
    render(<Heading todos={[]} />)
    const headingElement = screen.getByRole("heading")
    expect(headingElement).not.toBeNull()
  })  

  it("renders 'No items' when there are no items", () => {
    render(<Heading todos={[]} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("No items");
  });

  it("renders 'List Item' when there is one item", () => {
    render(<Heading todos={[{ id: "1", todo: "Test", done: false, date:"none", time:"" }]} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("List Item");
  })

  it("renders 'List Items' when there is more than one item", () => {
    render(<Heading todos={[{ id: "1", todo: "Test", done: false, date:"none", time:"" },{ id: "2", todo: "Test", done: false, date:"none", time:"" }]}/>)
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("List Items")
  })
})