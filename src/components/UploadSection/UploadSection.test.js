import { render, screen } from "@testing-library/react";
import { UploadSection } from "./UploadSection";

test("renders File comparison and formatting text", () => {
  render(<UploadSection />);
  const linkElement = screen.getByText(/File comparison and formatting/i);
  expect(linkElement).toBeInTheDocument();
});
