import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import FetchPosts from "./FetchPosts";

beforeEach(() => {
    global.fetch = jest.fn()
})

afterEach(() => {
    jest.resetAllMocks()
})

test('Mock API calls ', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => {
        name: "ABc",
        email: "Aabc@sddd.com"
    }
  })
})

render(<FetchPosts/>)

const nameElement =await screen.getByText