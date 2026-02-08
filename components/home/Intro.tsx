import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type IntroProps = {
  intro: string;
  pic: string;
};

export const Intro = ({ intro, pic }: IntroProps) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={2}
      sx={{ paddingLeft: "5%", paddingRight: "5%" }}
    >
      <Image src={pic} width={200} height={60} alt="logo" />
      <Stack direction="row" justifyContent="flex-start">
        <Typography variant="h5">{intro}</Typography>
      </Stack>
    </Stack>
  );
};
