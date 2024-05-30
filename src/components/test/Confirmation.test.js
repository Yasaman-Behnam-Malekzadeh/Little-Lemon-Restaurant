import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Confirmation from "../pages/Confirmation";
import "@testing-library/jest-dom/extend-expect";

test("Render all elements in Confirmation Component", async () => {
  render(
    <BrowserRouter>
      <Confirmation />
    </BrowserRouter>
  );

  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Your Reservation is Confirmed!"
  );
  expect(screen.getAllByRole("img")).toHaveLength(1);
  expect(screen.getAllByRole("heading")).toHaveLength(3);
  expect(screen.getAllByRole("link")).toHaveLength(3);
});
