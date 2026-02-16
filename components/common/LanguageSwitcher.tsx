"use client";

import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {
  localeCookieName,
  localeLabelMap,
  localizePathname,
  supportedLocales,
  type SupportedLocale,
} from "constant/locale";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type LanguageSwitcherProps = {
  locale: SupportedLocale;
};

export const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuAnchor, setMenuAnchor] = React.useState<HTMLElement | null>(null);

  const closeMenu = () => setMenuAnchor(null);

  const handleSelectLocale = (nextLocale: SupportedLocale) => {
    closeMenu();

    if (nextLocale === locale) {
      return;
    }

    const localizedPath = localizePathname(pathname, nextLocale);
    const queryString =
      typeof window === "undefined"
        ? ""
        : window.location.search.replace(/^\?/, "");
    const nextHref = queryString ? `${localizedPath}?${queryString}` : localizedPath;

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.push(nextHref);
  };

  return (
    <>
      <IconButton
        aria-controls={menuAnchor ? "language-switcher-menu" : undefined}
        aria-expanded={menuAnchor ? "true" : undefined}
        aria-haspopup="menu"
        aria-label="language switcher"
        onClick={(event) => setMenuAnchor(event.currentTarget)}
        size="small"
        sx={{
          width: "36px",
          height: "36px",
          border: "1px solid #83a3e384",
          backgroundColor: "#162a4fd9",
          color: "#d6e4ff",
          transition: "background-color 0.2s ease, transform 0.2s ease",
          "&:hover": {
            backgroundColor: "#1d3c71",
            transform: "translateY(-1px)",
          },
        }}
      >
        <LanguageRoundedIcon sx={{ fontSize: "18px" }} />
      </IconButton>

      <Menu
        id="language-switcher-menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              mt: "6px",
              minWidth: "132px",
              borderRadius: "10px",
              border: "1px solid #6f98e655",
              backgroundColor: "#102246",
              boxShadow: "0 10px 24px #00000066",
              overflow: "hidden",
            },
          },
        }}
      >
        {supportedLocales.map((localeOption) => {
          const isCurrentLocale = localeOption === locale;

          return (
            <MenuItem
              key={localeOption}
              selected={isCurrentLocale}
              onClick={() => handleSelectLocale(localeOption)}
              sx={{
                minHeight: "30px",
                px: "10px",
                py: "4px",
                color: isCurrentLocale ? "#ffffff" : "#d6e4ff",
                backgroundColor: isCurrentLocale ? "#2A4D8F" : "transparent",
                "&:hover": {
                  backgroundColor: isCurrentLocale ? "#2A4D8F" : "#1A3567",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
                  {localeLabelMap[localeOption]}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
