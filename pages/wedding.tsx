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
        <time dateTime="2021-10-09T21:00">9:00 pm</time>
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
        You’ll need to take a lateral flow test the day before you arrive at the
        farm and complete Nancarrow’s{" "}
        <Link
          href="https://weddings.trustedtrace.co.uk/guest-declaration/65747ffa-b87e-46e6-9428-7543548bc186"
          passHref
        >
          <a>declaration form</a>
        </Link>{" "}
        evidencing a negative result.
      </Text>
      <Text>
        Unfortunately, you will not be allowed to attend our wedding if you test
        positive or fail to submit evidence of a negative result.
      </Text>
      <Text>
        You can{" "}
        <Link
          href="https://www.gov.uk/order-coronavirus-rapid-lateral-flow-tests"
          passHref
        >
          <a>order free packs of lateral flow tests to be sent to your home</a>
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.nhs.uk/conditions/coronavirus-covid-19/testing/regular-rapid-coronavirus-tests-if-you-do-not-have-symptoms/"
          passHref
        >
          <a>pickup tests from a pharmacy, test site, or place of work</a>
        </Link>
        .
      </Text>
    </Page>
  </>
);

export default TravelAndStay;
