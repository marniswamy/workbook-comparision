import { render, screen } from "@testing-library/react";
import { TableContant } from "./TableContent";

test("renders File comparison and formatting text", () => {
  render(<TableContant />);
  const linkElement = screen.getByText(/File comparison and formatting/i);
  expect(linkElement).toBeInTheDocument();
});
