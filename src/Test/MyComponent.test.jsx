import React from "react";
import MyComponent from "./MyComponent";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Test MyComponent", () => {

    test('Button Click test ', () => {
        render(<MyComponent/>)
        const button = screen.getByText("Show")
        fireEvent.click(button)
      
    },5000);

    test("Himanshu to be found", () => {
        render(<MyComponent/>)
        const text = screen.getByText("Himanshu")
        expect(text).toBeInTheDocument()
    })

   
    

})