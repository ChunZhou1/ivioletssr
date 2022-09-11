import React from "react";
import { Box, Stack, Link } from "@mui/material";
import { Header } from "./Header";
import { Title } from "./Title";
import { Charact } from "./Charact";
import { Function } from "./Function";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { CharactDataType } from "./Charact";
import { FunctionDataType } from "./Function";

import { useRouter } from "next/router";

type ProductContentProps = {
  title1: string;
  title2: string;
  titlePic: string;
  headerPic: string;
  charactDataArray: CharactDataType[];
  functionDataArray: FunctionDataType[];
};

export const ProductContent = ({
  title1,
  title2,
  titlePic,
  headerPic,
  charactDataArray,
  functionDataArray,
}: ProductContentProps) => {
  const router = useRouter();
  return (
    <Box style={{ position: "relative" }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ position: "fixed", left: "1%", top: "65%" }}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: "60px" }} />
        <Link
          variant="h4"
          sx={{ fontWeight: 700 }}
          color={"0345fc"}
          underline="none"
          href="##"
          onClick={() => router.push("/")}
        >
          返回
        </Link>
      </Stack>
      <Stack
        direction="column"
        spacing={12}
        sx={{ backgroundColor: "#dae4f5" }}
      >
        <Header headerPic={headerPic} />
        <Title title1={title1} title2={title2} titlePic={titlePic} />
        <Charact charactDataArray={charactDataArray} />
        <Function functionDataArray={functionDataArray} />
      </Stack>
    </Box>
  );
};
