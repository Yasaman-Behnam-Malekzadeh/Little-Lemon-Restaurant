// Homepage.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "../pages/HomePage";
import "@testing-library/jest-dom/extend-expect";

test("renders all sections of the homepage", async () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

  await screen.findAllByRole("main");

  expect(screen.getByRole("main")).toBeInTheDocument();
});
