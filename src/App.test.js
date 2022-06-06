import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { App } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders welcome message", () => {
  render(<App />);
  expect(
    screen.getByText("File comparison and formatting")
  ).toBeInTheDocument();
});
