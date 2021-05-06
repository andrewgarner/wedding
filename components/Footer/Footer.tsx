import React, { VoidFunctionComponent } from "react";
import { Text, Typography } from "../Text";

const Footer: VoidFunctionComponent = () => (
  <footer className="mb-12">
    <Text typography={Typography.Small}>
      Andrew and Hannah — <time dateTime="2021-10-09">9/10/21</time> — Nancarrow
      Farm
    </Text>
  </footer>
);

export { Footer };
