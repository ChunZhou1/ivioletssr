import React from "react";
import NextLink from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { localizePathname, type SupportedLocale } from "constant/locale";
import { type ProductUiCopy } from "constant/product";
import { productHeaderSx } from "./styles";

type HeaderProps = {
  locale: SupportedLocale;
  uiCopy: ProductUiCopy;
};

export const Header = ({ locale, uiCopy }: HeaderProps) => {
  return (
    <Box sx={productHeaderSx.topBar}>
      <Stack direction="row" alignItems="center" spacing={2} sx={productHeaderSx.brandGroup}>
        <Box sx={productHeaderSx.logoBadge}>
          <Typography sx={productHeaderSx.logoWord}>iV</Typography>
          <AutoAwesomeIcon sx={productHeaderSx.logoSpark} />
        </Box>
        <Typography sx={productHeaderSx.brandText}>{uiCopy.headerBrandText}</Typography>
      </Stack>

      <Box sx={productHeaderSx.contactGroup}>
        <Link href="mailto:ivioletca@gmail.com" sx={productHeaderSx.contactPill}>
          ivioletca@gmail.com
        </Link>
        <Link href="tel:+14372314578" sx={productHeaderSx.contactPill}>
          +1 437 231 4578
        </Link>
      </Box>

      <Button
        component={NextLink}
        href={localizePathname("/", locale)}
        sx={productHeaderSx.backButton}
      >
        {uiCopy.backHomeText}
      </Button>
    </Box>
  );
};
