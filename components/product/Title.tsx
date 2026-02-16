import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { consultButtonSx, productHeroSx } from "./styles";

export type TitleProps = {
  heroTag: string;
  title1: string;
  title2: string;
  titlePic: string;
  consultHref: string;
  consultButtonText: string;
};
export const Title = ({
  heroTag,
  title1,
  title2,
  titlePic,
  consultHref,
  consultButtonText,
}: TitleProps) => {
  const heroCtaSx = {
    ...(consultButtonSx as Record<string, unknown>),
    ...(productHeroSx.ctaButton as Record<string, unknown>),
  };

  return (
    <Box sx={productHeroSx.card}>
      <Box sx={productHeroSx.copy}>
        <Typography sx={productHeroSx.tag}>{heroTag}</Typography>
        <Typography component="h1" sx={productHeroSx.title}>
          {title1}
        </Typography>
        <Typography sx={productHeroSx.desc}>{title2}</Typography>
        <Box sx={productHeroSx.ctaWrap}>
          <Button component="a" href={consultHref} sx={heroCtaSx}>
            {consultButtonText}
          </Button>
        </Box>
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
