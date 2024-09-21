import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../src/App";


describe("App", ()=>{
  
  it("renders correctly", ()=>{
    render(<App greet={'Hello World'}/>)
    const message = screen.getByRole("heading", {name: /hello world/i})
    expect(message).toBeInTheDocument()
  })
  
})