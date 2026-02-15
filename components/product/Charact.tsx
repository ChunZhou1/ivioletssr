import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { consultButtonSx, productFeatureSx } from "./styles";

export type CharactDataType = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
};

type CharactType = {
  sectionTitle: string;
  charactDataArray: CharactDataType[];
  consultHref: string;
};

export const Charact = ({ sectionTitle, charactDataArray, consultHref }: CharactType) => {
  return (
    <Box sx={productFeatureSx.section}>
      <Typography sx={productFeatureSx.eyebrow}>核心特点</Typography>
      <Typography component="h2" sx={productFeatureSx.title}>
        {sectionTitle}
      </Typography>
      <Box sx={productFeatureSx.grid}>
        {charactDataArray.map((item) => (
          <CharactItem
            key={item.title}
            content={item.content}
            imageAlt={item.imageAlt}
            imageSrc={item.imageSrc}
            title={item.title}
          />
        ))}
      </Box>
      <Box sx={productFeatureSx.ctaWrap}>
        <Button component="a" href={consultHref} sx={consultButtonSx}>
          立即邮件咨询
        </Button>
      </Box>
    </Box>
  );
};

type CharactItemProps = {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
};

const CharactItem = ({ title, content, imageSrc, imageAlt }: CharactItemProps) => {
  return (
    <Box sx={productFeatureSx.card}>
      <Box sx={productFeatureSx.cardImage}>
        <Image
          src={imageSrc}
          fill
          alt={imageAlt ?? title}
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography sx={productFeatureSx.cardTitle}>{title}</Typography>
      <Typography sx={productFeatureSx.cardBody}>{content}</Typography>
    </Box>
  );
};
