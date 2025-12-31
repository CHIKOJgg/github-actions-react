import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React and suck some lolipops/i);
  expect(linkElement).toBeInTheDocument();
});
