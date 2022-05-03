import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav links", () => {
  render(<App />);
  const designLink = screen.getByText(/designs/i);
  const setoutsLink = screen.getByText(/setouts/i);
  expect(designLink).toBeInTheDocument();
  expect(setoutsLink).toBeInTheDocument();
});
