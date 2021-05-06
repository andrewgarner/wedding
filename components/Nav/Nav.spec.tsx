import { render } from "@testing-library/react";
import React from "react";
import { Nav } from "./Nav";

describe("The navigation component", () => {
  it("renders correctly", () => {
    const { container } = render(<Nav />);

    expect(container).toMatchSnapshot();
  });
});
