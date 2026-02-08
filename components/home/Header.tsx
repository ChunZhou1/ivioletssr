"use client";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { heroContent, type HomeThumbnail } from "components/home/constant";
import { headerSx, sharedSx } from "components/home/styles";

type HeaderProps = {
  mainBannerSrc: string;
  thumbnails: HomeThumbnail[];
};

export const Header = ({ thumbnails, mainBannerSrc }: HeaderProps) => (
  <Box component="section" sx={headerSx.section}>
    <Box sx={sharedSx.sectionInner}>
      <Stack sx={headerSx.topBar}>
        <Stack sx={headerSx.brandGroup}>
          <Box sx={headerSx.logoBadge}>
            <Box sx={headerSx.logoDot} />
            <Typography component="span" sx={headerSx.logoWord}>
              IV
            </Typography>
            <AutoAwesomeRoundedIcon sx={headerSx.logoSpark} />
          </Box>
          <Typography component="span" sx={headerSx.brandText}>
            iViolet Technology
          </Typography>
        </Stack>

        <Box sx={headerSx.topContacts}>
          <Link href="mailto:ivioletca@gmail.com" sx={headerSx.topContactLink}>
            <MailOutlineRoundedIcon sx={headerSx.topIcon} />
            <span>ivioletca@gmail.com</span>
          </Link>
          <Link href="tel:+14372314578" sx={headerSx.topContactLink}>
            <LocalPhoneOutlinedIcon sx={headerSx.topIcon} />
            <span>+1 437 231 4578</span>
          </Link>
        </Box>
      </Stack>

      <Box sx={headerSx.bannerCard}>
        <Image
          src={mainBannerSrc}
          alt="iViolet hero banner"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 1296px"
          style={headerSx.bannerImage as React.CSSProperties}
        />
        <Box sx={headerSx.bannerOverlay} />
        <Box sx={headerSx.bannerCopy}>
          <Typography sx={headerSx.heroTag}>{heroContent.tag}</Typography>
          <Typography component="h1" sx={headerSx.heroTitle}>
            {heroContent.title}
          </Typography>
          <Typography sx={headerSx.heroDesc}>{heroContent.description}</Typography>
        </Box>
      </Box>

      <Box sx={headerSx.thumbnailRow}>
        {thumbnails.map((item) => (
          <Box key={item.src} sx={headerSx.thumbnailItem}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 420px"
              style={headerSx.thumbnailImage as React.CSSProperties}
            />
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);
