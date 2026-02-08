"use client";

import React from "react";
import { Stack, GridLegacy as Grid, Typography } from "@mui/material";
import Image from "next/image";

import { Zoom } from "react-slideshow-image";

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
            <Image src={logoSrc} width={200} height={60} alt="logo" />
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
              width={1000}
              height={250}
              style={{ width: "100%", height: "auto" }}
              alt={item}
            />
          ))}
        </Zoom>
      )}
    </>
  );
};
