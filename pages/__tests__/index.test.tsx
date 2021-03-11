import * as React from "react";
import { render, screen } from "@testing-library/react";
import Home from "index";

describe("index", () => {
  it("should render", () => {
    render(<Home />);
  });
});
