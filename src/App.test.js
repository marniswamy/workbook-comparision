import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders File comparison and formatting text", () => {
  render(<App />);
  const linkElement = screen.getByText(/File comparison and formatting/i);
  expect(linkElement).toBeInTheDocument();
});
