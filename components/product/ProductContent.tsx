"use client";

import React from "react";
import { Box } from "@mui/material";
import { type SupportedLocale } from "constant/locale";
import { type ProductUiCopy } from "constant/product";
import { Header } from "./Header";
import { Title } from "./Title";
import { Charact } from "./Charact";
import { Function } from "./Function";
import { CallToAction } from "./CallToAction";
import { CharactDataType } from "./Charact";
import { FunctionDataType } from "./Function";
import { productSharedSx } from "./styles";

type ProductContentProps = {
  locale: SupportedLocale;
  uiCopy: ProductUiCopy;
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
  consultHref: string;
};

export const ProductContent = ({
  locale,
  uiCopy,
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
  consultHref,
}: ProductContentProps) => {
  return (
    <Box component="main" sx={productSharedSx.pageRoot}>
      <Box sx={productSharedSx.sectionInner}>
        <Header locale={locale} uiCopy={uiCopy} />
        <Title
          consultButtonText={uiCopy.consultButtonText}
          consultHref={consultHref}
          heroTag={heroTag}
          title1={title1}
          title2={title2}
          titlePic={heroImage}
        />
        <Charact
          consultButtonText={uiCopy.consultButtonText}
          charactDataArray={charactDataArray}
          consultHref={consultHref}
          featureEyebrow={uiCopy.featureEyebrow}
          sectionTitle={charactSectionTitle}
        />
        <Function
          functionEyebrow={uiCopy.functionEyebrow}
          functionDataArray={functionDataArray}
          sectionTitle={functionSectionTitle}
        />
        <CallToAction
          consultButtonText={uiCopy.consultButtonText}
          consultHref={consultHref}
          description={ctaDescription}
          imageSrc={ctaImage}
          title={ctaTitle}
        />
      </Box>
    </Box>
  );
};
