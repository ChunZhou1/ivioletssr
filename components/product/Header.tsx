import React from "react";
import { Stack } from "@mui/material";
import Image from "next/image";

type HeaderProps = {
  headerPic: string;
};

export const Header = ({ headerPic }: HeaderProps) => {
  return (
    <Stack direction="column" spacing={6} sx={{ width: "100%" }}>
      <Image src={headerPic} height="300px" width="400px" alt="headerImg" />
    </Stack>
  );
};
