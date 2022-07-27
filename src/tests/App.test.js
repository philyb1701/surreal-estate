import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../components/App";

test("renders correctly", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Surreal/i);
  const linkElement2 = screen.getByText(/Estate/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
