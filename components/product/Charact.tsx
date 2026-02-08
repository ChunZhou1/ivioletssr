"use client";

import React from "react";
import { Stack, GridLegacy as Grid, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { useIsMobile } from "hooks/common/useIsMobile";

export type CharactDataType = {
  icon?: React.ReactNode;
  title: string;
  content: string;
};

type CharactType = {
  charactDataArray: CharactDataType[];
};

export const Charact = ({ charactDataArray }: CharactType) => {
  return (
    <Stack direction="column" alignItems="center" spacing={5}>
      <Typography variant="h2" sx={{ color: "#0345fc", fontWeight: 700 }}>
        主要特点
      </Typography>
      <Grid container>
        {charactDataArray &&
          charactDataArray.map((item) => (
            <CharactItem
              key={item.title}
              icon={item.icon}
              content={item.content}
              title={item.title}
            />
          ))}
      </Grid>
    </Stack>
  );
};

type CharactItemProps = {
  icon?: React.ReactNode;
  title: string;
  content: string;
};
const CharactItem = ({ icon, title, content }: CharactItemProps) => {
  const isMobile = useIsMobile();
  return (
    <Grid item sm={12} md={5.5} mt={10}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{ marginLeft: isMobile ? "0%" : "15%" }}
      >
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          {icon ? (
            icon
          ) : (
            <MilitaryTechIcon color="primary" sx={{ fontSize: "100px" }} />
          )}
          <Stack direction="column" alignItems="flex-start" spacing={4}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, lineHeight: "56px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 400, lineHeight: "46px" }}
            >
              {content}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
