"use client";

import React from "react";
import { Box } from "@mui/material";
import { Header } from "./Header";
import { Title } from "./Title";
import { Charact } from "./Charact";
import { Function } from "./Function";
import { CallToAction } from "./CallToAction";
import { CharactDataType } from "./Charact";
import { FunctionDataType } from "./Function";
import { productSharedSx } from "./styles";

type ProductContentProps = {
  heroTag: string;
  title1: string;
  title2: string;
  heroImage: string;
  charactSectionTitle: string;
  charactDataArray: CharactDataType[];
  functionSectionTitle: string;
  functionDataArray: FunctionDataType[];
  ctaTitle: string;
  ctaDescription: string;
  ctaImage: string;
};

export const ProductContent = ({
  heroTag,
  title1,
  title2,
  heroImage,
  charactSectionTitle,
  charactDataArray,
  functionSectionTitle,
  functionDataArray,
  ctaTitle,
  ctaDescription,
  ctaImage,
}: ProductContentProps) => {
  return (
    <Box component="main" sx={productSharedSx.pageRoot}>
      <Box sx={productSharedSx.sectionInner}>
        <Header />
        <Title heroTag={heroTag} title1={title1} title2={title2} titlePic={heroImage} />
        <Charact charactDataArray={charactDataArray} sectionTitle={charactSectionTitle} />
        <Function functionDataArray={functionDataArray} sectionTitle={functionSectionTitle} />
        <CallToAction description={ctaDescription} imageSrc={ctaImage} title={ctaTitle} />
      </Box>
    </Box>
  );
};
