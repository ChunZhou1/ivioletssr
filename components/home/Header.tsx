import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Image from "next/image";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const picArray = [
  <Image
    src={"/bannar11.jpg"}
    key={"1"}
    width="1000px"
    height="250px"
    layout="responsive"
    alt="b1"
  />,
  <Image
    src={"/bannar22.jpg"}
    key={"2"}
    width="1000px"
    height="250px"
    layout="responsive"
    alt="b2"
  />,
  <Image
    src={"/bannar33.jpg"}
    key={"3"}
    width="1000px"
    height="250px"
    layout="responsive"
    alt="b3"
  />,
];

export const Header = () => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item md={6} sm={12}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ marginLeft: "5%" }}
          >
            <Image src={"/logo.jpg"} width="200px" height="60px" alt="logo" />
          </Stack>
        </Grid>
        <Grid item md={6} sm={12}>
          <Stack
            direction="column"
            alignItems="flex-end"
            sx={{ marginRight: "5%" }}
          >
            <Typography variant="h4">iVioletca@gmail.com 4372314578</Typography>
          </Stack>
        </Grid>
      </Grid>

      <Zoom scale={1.4}>{picArray}</Zoom>
    </>
  );
};
