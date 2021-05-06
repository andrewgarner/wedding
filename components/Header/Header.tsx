import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Text, Typography } from "../Text";

enum HeaderDisplay {
  Visible = "Visible",
  Invisible = "Invisible",
  Hidden = "Hidden",
}

const headerDisplayClassNames: Record<HeaderDisplay, string> = {
  [HeaderDisplay.Visible]: "visible",
  [HeaderDisplay.Invisible]: "invisible h-0",
  [HeaderDisplay.Hidden]: "hidden",
};

interface HeaderProps {
  display?: HeaderDisplay;
}

const Header: FunctionComponent<HeaderProps> = ({
  display = HeaderDisplay.Visible,
}) => (
  <header className={headerDisplayClassNames[display]}>
    <Text tag="h1" typography={Typography.HeaderXLarge}>
      <Link href="/">
        <a>Andrew and Hannah</a>
      </Link>
    </Text>
  </header>
);

export { Header, HeaderDisplay };
export type { HeaderProps };
