import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import Image from "next/image";

export type TitleProps = {
  title1: string;
  title2: string;
  titlePic: string;
};
export const Title = ({ title1, title2, titlePic }: TitleProps) => {
  return (
    <Grid container>
      <Grid item sm={12} md={1}></Grid>
      <Grid item sm={12} md={5}>
        <Stack direction="column" alignItems="center">
          <Stack direction="column" alignItems="flex-start" spacing={3}>
            <Typography
              variant="h2"
              sx={{ fontWeight: 700, lineHeight: "100px" }}
            >
              {title1}
            </Typography>
            <Typography variant="h4" sx={{ lineHeight: "56px" }}>
              {title2}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item sm={12} md={5}>
        <Stack direction="column" alignItems="center">
          <Image src={titlePic} height="300px" width="400px" alt="Title" />
        </Stack>
      </Grid>
      <Grid item sm={12} md={1}></Grid>
    </Grid>
  );
};
