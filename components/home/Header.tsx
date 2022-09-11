import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Image from "next/image";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type HeaderProps = {
  logoSrc: string;
  slideSrc: string[];
};

export const Header = ({ slideSrc, logoSrc }: HeaderProps) => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item md={6} sm={12}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ marginLeft: "5%" }}
          >
            <Image src={logoSrc} width="200px" height="60px" alt="logo" />
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

      {slideSrc && (
        <Zoom scale={1.4}>
          {slideSrc.map((item) => (
            <Image
              key={item}
              src={item}
              width="1000px"
              height="250px"
              layout="responsive"
              alt={item}
            />
          ))}
        </Zoom>
      )}
    </>
  );
};
