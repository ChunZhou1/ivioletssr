import React from "react";
import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { productCtaSx } from "./styles";

type CallToActionProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export const CallToAction = ({ title, description, imageSrc }: CallToActionProps) => {
  return (
    <Box sx={productCtaSx.card}>
      <Box sx={productCtaSx.copy}>
        <Typography component="h2" sx={productCtaSx.title}>
          {title}
        </Typography>
        <Typography sx={productCtaSx.desc}>{description}</Typography>
        <Button component={NextLink} href="/" sx={productCtaSx.button}>
          立即咨询
        </Button>
      </Box>

      <Box sx={productCtaSx.imageCard}>
        <Image
          src={imageSrc}
          fill
          alt={title}
          sizes="(max-width: 1000px) 100vw, 280px"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};
