import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Page } from "../components/Page";
import { Text, Typography } from "../components/Text";

const TravelAndStay = () => (
  <>
    <Head>
      <title>Wedding | Andrew & Hannah</title>
    </Head>

    <Page title="Wedding">
      <Text>
        We’re getting married this autumn at{" "}
        <Link href="https://www.nancarrowfarm.co.uk" passHref>
          <a>Nancarrow</a>
        </Link>{" "}
        — a working organic farm nestled in a hidden valley near Truro,
        Cornwall. We’d love you to join us.
      </Text>

      <Text tag="h2" typography={Typography.HeaderMedium}>
        The day
      </Text>

      <Text>
        <time dateTime="2021-10-09T13:00">1:00 pm</time>
        <br />
        Guests arrive at Nancarrow
      </Text>

      <Text>
        <time dateTime="2021-10-09T13:30">1:30 pm</time>
        <br />
        Ceremony in the Rusty Barn
      </Text>

      <Text>
        <time dateTime="2021-10-09T14:00">2:00 pm</time>
        <br />
        Drinks & snacks in the courtyard
      </Text>

      <Text>
        <time dateTime="2021-10-09T16:00">4:00 pm</time>
        <br />
        Wood-fired wedding feast in the Oak Barn
      </Text>

      <Text>
        <time dateTime="2021-10-09T21:30">9:30 pm</time>
        <br />
        Champagne & hot dogs
      </Text>

      <Text>
        <time dateTime="2021-10-09T23:30">11:30 pm</time>
        <br />
        Carriages
      </Text>

      <Text tag="h2" typography={Typography.HeaderMedium}>
        Coronavirus
      </Text>

      <Text>
        We’re keeping our fingers and toes crossed and hoping we hit all of the
        government guidelines and that weddings will be able to go ahead as
        normal by October.
      </Text>

      <Text>
        But <em>just</em> in case Coronavirus throws any other curveballs our
        way, we’d recommend checking the cancellation or rebooking policies for
        any accommodation you book.
      </Text>
    </Page>
  </>
);

export default TravelAndStay;
