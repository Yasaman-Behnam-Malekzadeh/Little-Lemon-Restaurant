import React from "react";
import About from "../pages/About";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("Show the title", async () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  expect(screen.getByRole("article")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Little Lemon"
  );
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "Chicago"
  );
  expect(
    screen.getByText(/Little Lemon opened in 1995 by two Italian brothers/)
  ).toBeInTheDocument();
  expect(screen.getAllByRole("img")).toHaveLength(2);
});
