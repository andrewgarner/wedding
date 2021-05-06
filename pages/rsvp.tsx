import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { Page } from "../components/Page";

const RSVP = () => {
  const form = useRef();

  useEffect(() => {
    createWidget("GtQy7j8b", {
      container: form.current,
      opacity: 0,
      hideFooter: true,
      hideHeaders: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>RSVP | Andrew & Hannah</title>
      </Head>

      <Page title="RSVP">
        <div className="absolute inset-x-0 min-w-max h-4/6" ref={form} />
      </Page>
    </>
  );
};

export default RSVP;
