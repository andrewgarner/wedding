import { render } from "@testing-library/react";
import React from "react";
import { Page } from "./Page";

it("renders correctly", () => {
  const { container } = render(
    <Page title="The quick brown fox jumps over the lazy dog">
      <p>Foo</p>
    </Page>
  );

  expect(container).toMatchSnapshot();
});
