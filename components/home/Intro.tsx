import React from "react";
import { Stack, Typography } from "@mui/material";
import { intro } from "content";
import Image from "next/image";

export const Intro = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      sx={{ paddingLeft: "5%", paddingRight: "5%" }}
    >
      <Image src={"/logo.jpg"} width="200px" height="60px" alt="logo" />
      <Stack direction="row" justifyContent="flex-start">
        <Typography variant="h5">{intro}</Typography>
      </Stack>
    </Stack>
  );
};
