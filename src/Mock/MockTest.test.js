import {render,screen waitFor} from "@testing-library/react"
import APICall from './FetchAPI'

global.fetch = jest.Fn(() => {
    Promise.resolve({
        json: ()=> Promise.resolve({name: "Himanshu"})
    })
})

test("displaying the name after fetching data"), async () => {
render(<APICall/>)
 let element = screen.getbyText("User: Himanshu")
await waitFor(() => expect(element).toBeInTheDocument())
}