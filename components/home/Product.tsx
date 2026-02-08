"use client";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { serviceContent, type HomeProduct } from "components/home/constant";
import { productSx, sharedSx } from "components/home/styles";

type ProductProps = {
  products: HomeProduct[];
};

const renderServiceIcon = (icon: HomeProduct["icon"]) => {
  switch (icon) {
    case "hotel":
      return <HotelRoundedIcon sx={productSx.titleIcon} />;
    case "coffee":
      return <LocalCafeRoundedIcon sx={productSx.titleIcon} />;
    case "shopping":
      return <ShoppingBagRoundedIcon sx={productSx.titleIcon} />;
    default:
      return <ShoppingBagRoundedIcon sx={productSx.titleIcon} />;
  }
};

export const Product = ({ products }: ProductProps) => (
  <Box component="section" sx={productSx.section}>
    <Box sx={sharedSx.sectionInner}>
      <Typography sx={sharedSx.sectionEyebrow}>{serviceContent.eyebrow}</Typography>
      <Typography component="h2" sx={sharedSx.sectionTitle}>
        {serviceContent.title}
      </Typography>

      <Box sx={productSx.grid}>
        {products.map((item) => (
          <Box component="article" key={item.keyValue} sx={productSx.card}>
            <Box sx={productSx.imageCard}>
              <Image
                src={item.imgSrc}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 50vw, 33vw"
                style={productSx.image as React.CSSProperties}
              />
            </Box>

            <Stack sx={productSx.titleRow}>
              {renderServiceIcon(item.icon)}
              <Typography component="h3" sx={productSx.title}>
                {item.title}
              </Typography>
            </Stack>

            <Typography sx={productSx.desc}>{item.description}</Typography>

            <Link
              component={NextLink}
              href={item.href}
              underline="none"
              sx={productSx.cardButton}
            >
              <span>详细了解</span>
              <ArrowForwardRoundedIcon sx={productSx.cardButtonIcon} />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
