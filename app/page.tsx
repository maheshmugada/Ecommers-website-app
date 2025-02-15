"use client";
import Landing from "./_landing/page";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

export default function Home() {
  const theme =  createTheme({
    /** Your theme override here */
  });
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Landing />
    </MantineProvider>
  );
}
