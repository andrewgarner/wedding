import React, { FunctionComponent } from "react";
import { Footer } from "../Footer";
import { Header, HeaderDisplay } from "../Header";
import { Nav } from "../Nav";
import { Text, Typography } from "../Text";

interface PageProps {
  title: string;
}

const Page: FunctionComponent<PageProps> = ({ title, children }) => (
  <div className="container grid gap-4 grid-cols-1 grid-rows-page min-h-screen text-center">
    <Header display={HeaderDisplay.Invisible} />
    <Nav />
    <main className="mb-12 mx-4 opacity-0 animate-load lg:mb-16 xl:mb-24">
      <div className="mb-12 lg:mb-16 xl:mb-24">
        <Text tag="h1" typography={Typography.HeaderLarge}>
          {title}
        </Text>
      </div>
      {children}
    </main>
    <Footer />
  </div>
);

export { Page };
export type { PageProps };
