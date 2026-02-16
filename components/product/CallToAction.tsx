import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { consultButtonSx, productCtaSx } from "./styles";

type CallToActionProps = {
  title: string;
  description: string;
  imageSrc: string;
  consultHref: string;
  consultButtonText: string;
};

export const CallToAction = ({
  title,
  description,
  imageSrc,
  consultHref,
  consultButtonText,
}: CallToActionProps) => {
  const ctaButtonSx = {
    ...(consultButtonSx as Record<string, unknown>),
    ...(productCtaSx.button as Record<string, unknown>),
  };

  return (
    <Box sx={productCtaSx.card}>
      <Box sx={productCtaSx.copy}>
        <Typography component="h2" sx={productCtaSx.title}>
          {title}
        </Typography>
        <Typography sx={productCtaSx.desc}>{description}</Typography>
        <Box sx={productCtaSx.buttonWrap}>
          <Button component="a" href={consultHref} sx={ctaButtonSx}>
            {consultButtonText}
          </Button>
        </Box>
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
