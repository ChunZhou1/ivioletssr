import React from "react";
import NextLink from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Box, Button, Stack, Typography } from "@mui/material";
import { productHeaderSx } from "./styles";

export const Header = () => {
  return (
    <Box sx={productHeaderSx.topBar}>
      <Stack direction="row" alignItems="center" spacing={2} sx={productHeaderSx.brandGroup}>
        <Box sx={productHeaderSx.logoBadge}>
          <Typography sx={productHeaderSx.logoWord}>iV</Typography>
          <AutoAwesomeIcon sx={productHeaderSx.logoSpark} />
        </Box>
        <Typography sx={productHeaderSx.brandText}>iViolet Product</Typography>
      </Stack>

      <Button component={NextLink} href="/" sx={productHeaderSx.backButton}>
        ← 返回首页
      </Button>
    </Box>
  );
};
