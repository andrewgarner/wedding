import Link from "next/link";
import { useRouter } from "next/router";
import React, { VoidFunctionComponent } from "react";
import { Text, Typography } from "../Text";

const Nav: VoidFunctionComponent = () => {
  const router = useRouter();
  return (
    <nav className="">
      <ul className="inline-flex flex-row uppercase space-x-4">
        {router?.pathname !== "/" && (
          <Text tag="li" typography={Typography.Small}>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </Text>
        )}
        <Text tag="li" typography={Typography.Small}>
          <Link href="/wedding" passHref>
            <a>Wedding</a>
          </Link>
        </Text>
        <Text tag="li" typography={Typography.Small}>
          <Link href="/travel-and-stay" passHref>
            <a>Travel & stay</a>
          </Link>
        </Text>
        <Text tag="li" typography={Typography.Small}>
          <Link href="/rsvp" passHref>
            <a>RSVP</a>
          </Link>
        </Text>
      </ul>
    </nav>
  );
};

export { Nav };
