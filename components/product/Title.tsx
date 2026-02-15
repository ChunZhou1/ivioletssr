import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { productHeroSx } from "./styles";

export type TitleProps = {
  heroTag: string;
  title1: string;
  title2: string;
  titlePic: string;
};
export const Title = ({ heroTag, title1, title2, titlePic }: TitleProps) => {
  return (
    <Box sx={productHeroSx.card}>
      <Box sx={productHeroSx.copy}>
        <Typography sx={productHeroSx.tag}>{heroTag}</Typography>
        <Typography component="h1" sx={productHeroSx.title}>
          {title1}
        </Typography>
        <Typography sx={productHeroSx.desc}>{title2}</Typography>
      </Box>

      <Box sx={productHeroSx.imageCard}>
        <Image
          src={titlePic}
          fill
          priority
          alt={title1}
          sizes="(max-width: 1000px) 100vw, 400px"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};
