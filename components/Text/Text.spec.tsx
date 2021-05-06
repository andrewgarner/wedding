import { render } from "@testing-library/react";
import React from "react";

import { Text, Typography } from "./Text";

describe("The text component", () => {
  it("renders the default correctly", () => {
    const { container } = render(
      <Text>The quick brown fox jumps over the lazy dog</Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders the specified tag correctly", () => {
    const { container } = render(
      <Text tag="li">The quick brown fox jumps over the lazy dog</Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders small typography correctly", () => {
    const { container } = render(
      <Text typography={Typography.Small}>
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders x-large header typography correctly", () => {
    const { container } = render(
      <Text typography={Typography.HeaderXLarge}>
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders large header typography correctly", () => {
    const { container } = render(
      <Text typography={Typography.HeaderLarge}>
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders medium header typography correctly", () => {
    const { container } = render(
      <Text typography={Typography.HeaderMedium}>
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders small header typography correctly", () => {
    const { container } = render(
      <Text typography={Typography.HeaderSmall}>
        The quick brown fox jumps over the lazy dog
      </Text>
    );

    expect(container).toMatchSnapshot();
  });
});
