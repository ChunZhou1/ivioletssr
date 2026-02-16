"use client";

import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { type HomePageConstants } from "constant/home";
import { contactSx, sharedSx } from "components/home/styles";

type ContactProps = {
  contactContent: HomePageConstants["contactContent"];
};

export const Contact = ({ contactContent }: ContactProps) => (
  <Box component="section" sx={contactSx.section}>
    <Box sx={sharedSx.sectionInner}>
      <Typography sx={sharedSx.sectionEyebrow}>{contactContent.eyebrow}</Typography>
      <Typography component="h2" sx={sharedSx.sectionTitle}>
        {contactContent.title}
      </Typography>
      <Typography sx={contactSx.desc}>{contactContent.description}</Typography>

      <Box sx={contactSx.body}>
        <Box sx={contactSx.infoList}>
          <Link
            href="https://maps.google.com/?q=29+Singer+Court,+Toronto"
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={contactSx.infoRow}
          >
            <PlaceRoundedIcon sx={contactSx.infoIcon} />
            <span>{contactContent.addressLabel}: 29 Singer Court, Toronto</span>
          </Link>

          <Link href="mailto:ivioletca@gmail.com" underline="none" sx={contactSx.infoRow}>
            <MailOutlineRoundedIcon sx={contactSx.infoIcon} />
            <span>{contactContent.emailLabel}: ivioletca@gmail.com</span>
          </Link>

          <Link href="tel:+14372314578" underline="none" sx={contactSx.infoRow}>
            <LocalPhoneOutlinedIcon sx={contactSx.infoIcon} />
            <span>{contactContent.telLabel}: +1 437 231 4578</span>
          </Link>
        </Box>

        <Box component="aside" sx={contactSx.consultCard}>
          <Box sx={contactSx.consultImage}>
            <Image
              src={contactContent.consultImageSrc}
              alt={contactContent.consultImageAlt}
              fill
              sizes="(max-width: 1200px) 100vw, 430px"
              style={contactSx.consultImageItem as React.CSSProperties}
            />
          </Box>
          <Typography component="h3" sx={contactSx.consultTitle}>
            {contactContent.consultTitle}
          </Typography>
          <Typography sx={contactSx.consultDesc}>{contactContent.consultDescription}</Typography>
          <Link href="mailto:ivioletca@gmail.com" underline="none" sx={contactSx.primaryButton}>
            {contactContent.consultButtonText}
          </Link>
        </Box>
      </Box>
    </Box>
  </Box>
);
