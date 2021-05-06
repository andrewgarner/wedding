import React, { ElementType, FunctionComponent } from "react";

enum Typography {
  HeaderXLarge = "Header x-large",
  HeaderLarge = "Header large",
  HeaderMedium = "Header medium",
  HeaderSmall = "Header small",
  Base = "Base",
  Small = "Small",
}

const typographyClassNames: Record<Typography, string> = {
  [Typography.HeaderXLarge]:
    "space-y-32 leading-loose  first-of-type:mt-0 mt-32 mb-4 mx-auto font-sans text-3xl lg:text-4xl xl:text-5xl font-normal uppercase",
  [Typography.HeaderLarge]:
    "space-y-32 leading-loose  first-of-type:mt-8 mt-32 mb-4 mx-auto font-sans text-4xl lg:text-6xl xl:text-7xl font-normal uppercase",
  [Typography.HeaderMedium]:
    "space-y-32 leading-loose  first-of-type:mt-8 mt-32 mb-4 mx-auto font-sans text-3xl lg:text-4xl font-normal uppercase",
  [Typography.HeaderSmall]:
    "space-y-32 leading-loose mt-16 mb-4 mx-auto font-sans text-2xl lg:text-3xl font-normal uppercase",
  [Typography.Base]:
    "space-y leading-loose max-w-prose mx-auto font-sans text-lg lg:text-xl font-normal",
  [Typography.Small]:
    "mx-auto max-w-prose font-sans text-sm lg:text-base font-normal",
};

interface TextProps {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "li";
  typography?: Typography;
}

const Text: FunctionComponent<TextProps> = ({
  tag = "p",
  typography = Typography.Base,
  children,
}) => {
  const TextTag = tag as ElementType;
  return (
    // eslint-disable-next-line react/forbid-component-props
    <TextTag className={typographyClassNames[typography]}>{children}</TextTag>
  );
};

export { Text, Typography };
export type { TextProps };
