"use client";

import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { type HomePageConstants, type IntroPill } from "constant/home";
import { localizePathname, type SupportedLocale } from "constant/locale";
import { introSx, sharedSx } from "components/home/styles";

type IntroProps = {
  locale: SupportedLocale;
  introContent: HomePageConstants["introContent"];
  intro: string;
  pills: IntroPill[];
};

const renderPillIcon = (icon: IntroPill["icon"]) => {
  switch (icon) {
    case "hotel":
      return <HotelRoundedIcon sx={introSx.pillIcon} />;
    case "coffee":
      return <LocalCafeRoundedIcon sx={introSx.pillIcon} />;
    case "shopping":
      return <ShoppingBagRoundedIcon sx={introSx.pillIcon} />;
    default:
      return <ShoppingBagRoundedIcon sx={introSx.pillIcon} />;
  }
};

export const Intro = ({ locale, introContent, intro, pills }: IntroProps) => (
  <Box component="section" sx={introSx.section}>
    <Box sx={sharedSx.sectionInner}>
      <Typography sx={sharedSx.sectionEyebrow}>{introContent.eyebrow}</Typography>
      <Typography component="h2" sx={sharedSx.sectionTitle}>
        {introContent.title}
      </Typography>

      <Box sx={introSx.body}>
        <Box sx={introSx.imageCard}>
          <Image
            src={introContent.imageSrc}
            alt={introContent.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 440px"
            style={introSx.image as React.CSSProperties}
          />
        </Box>

        <Box>
          <Typography sx={introSx.copy}>{intro}</Typography>
          <Box sx={introSx.pillsRow}>
            {pills.map((item) => (
              <Link
                component={NextLink}
                key={item.label}
                href={localizePathname(item.href, locale)}
                underline="none"
                sx={introSx.pillLink}
              >
                {renderPillIcon(item.icon)}
                <span>{item.label}</span>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);
