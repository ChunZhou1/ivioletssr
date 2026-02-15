import type { SxProps, Theme } from "@mui/material/styles";

type SxMap = Record<string, SxProps<Theme>>;

export const productSharedSx: SxMap = {
  pageRoot: {
    minHeight: "100vh",
    backgroundColor: "#070f1f",
    color: "#f3f7ff",
    py: "28px",
  },
  sectionInner: {
    width: "min(1296px, calc(100% - 32px))",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    "@media (max-width: 640px)": {
      width: "min(1296px, calc(100% - 24px))",
    },
  },
};

export const consultButtonSx: SxProps<Theme> = {
  minHeight: "56px",
  px: "30px",
  borderRadius: "999px",
  border: "1px solid #ffd983",
  background: "linear-gradient(180deg, #ffd666 0%, #ff9f2d 100%)",
  boxShadow: "0 12px 24px #8e4a0f66",
  color: "#1b2a43",
  fontSize: "22px",
  fontWeight: 800,
  letterSpacing: "0.01em",
  textTransform: "none",
  "&:hover": {
    filter: "brightness(1.06)",
    background: "linear-gradient(180deg, #ffe08a 0%, #ffaf4b 100%)",
  },
  "@media (max-width: 640px)": {
    minHeight: "52px",
    px: "24px",
    fontSize: "20px",
  },
};

export const productHeaderSx: SxMap = {
  topBar: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: "12px",
    py: "6px",
    "@media (max-width: 1100px)": {
      gridTemplateColumns: "1fr",
      justifyItems: "start",
      gap: "10px",
    },
  },
  brandGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  logoBadge: {
    position: "relative",
    width: "40px",
    height: "40px",
    borderRadius: "12px",
    border: "1px solid #c6daff88",
    background: "linear-gradient(135deg, #89b7ff 0%, #2e5ce6 100%)",
    boxShadow: "0 8px 20px #1835727a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoWord: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 800,
    lineHeight: 1,
  },
  logoSpark: {
    position: "absolute",
    top: "4px",
    right: "4px",
    color: "#dce8ff",
    fontSize: "11px !important",
  },
  brandText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
    "@media (max-width: 640px)": {
      fontSize: "18px",
    },
  },
  contactGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    "@media (max-width: 1100px)": {
      justifyContent: "flex-start",
    },
  },
  contactPill: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: "36px",
    px: "12px",
    borderRadius: "999px",
    border: "1px solid #83a3e384",
    backgroundColor: "#162a4fd9",
    color: "#e7ecf8",
    fontSize: "14px",
    textDecoration: "none",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#1d3c71",
    },
  },
  backButton: {
    minHeight: "36px",
    px: "14px",
    borderRadius: "999px",
    border: "1px solid #83a3e384",
    backgroundColor: "#162a4fd9",
    color: "#e7ecf8",
    fontSize: "14px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#1d3c71",
    },
  },
};

export const productHeroSx: SxMap = {
  card: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 400px",
    gap: "22px",
    minHeight: "360px",
    p: "24px",
    borderRadius: "24px",
    border: "1px solid #7f97cc52",
    background: "linear-gradient(90deg, #08101f 0%, #0c1c3a 100%)",
    "@media (max-width: 1000px)": {
      gridTemplateColumns: "1fr",
      p: "20px",
    },
  },
  copy: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  tag: {
    mb: "10px",
    color: "#a7d4ff",
    fontSize: "16px",
    fontWeight: 500,
  },
  title: {
    color: "#fff",
    fontSize: "44px",
    lineHeight: 1.2,
    fontWeight: 700,
    "@media (max-width: 1200px)": {
      fontSize: "38px",
    },
    "@media (max-width: 640px)": {
      fontSize: "32px",
    },
  },
  desc: {
    mt: "12px",
    color: "#d7e2f4",
    fontSize: "22px",
    lineHeight: 1.55,
    "@media (max-width: 1200px)": {
      fontSize: "20px",
    },
    "@media (max-width: 640px)": {
      fontSize: "18px",
    },
  },
  ctaButton: {
    mt: 0,
  },
  ctaWrap: {
    display: "flex",
    justifyContent: "flex-start",
    mt: "auto",
    mb: "12px",
  },
  imageCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    minHeight: "260px",
    "@media (max-width: 1000px)": {
      minHeight: "220px",
    },
  },
};

export const productFeatureSx: SxMap = {
  section: {
    border: "1px solid #355a8f80",
    borderRadius: "22px",
    backgroundColor: "#0d1a32",
    p: "22px 24px 24px",
  },
  eyebrow: {
    mb: "10px",
    color: "#7fa4ff",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  title: {
    color: "#f3f7ff",
    fontSize: "34px",
    lineHeight: 1.25,
    fontWeight: 700,
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
  },
  grid: {
    mt: "16px",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "14px",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    p: "14px",
    borderRadius: "16px",
    border: "1px solid #3a5d9299",
    backgroundColor: "#122645",
  },
  cardImage: {
    position: "relative",
    overflow: "hidden",
    height: "86px",
    borderRadius: "10px",
  },
  cardTitle: {
    color: "#f4f8ff",
    fontSize: "24px",
    lineHeight: 1.3,
    fontWeight: 700,
    "@media (max-width: 640px)": {
      fontSize: "22px",
    },
  },
  cardBody: {
    color: "#c5d2ea",
    fontSize: "18px",
    lineHeight: 1.6,
    "@media (max-width: 640px)": {
      fontSize: "16px",
    },
  },
  ctaWrap: {
    mt: "18px",
    mb: "8px",
    display: "flex",
    justifyContent: "flex-start",
  },
};

export const productFunctionSx: SxMap = {
  section: {
    border: "1px solid #3a5d9299",
    borderRadius: "22px",
    backgroundColor: "#0a152b",
    p: "22px 24px 24px",
  },
  eyebrow: {
    mb: "10px",
    color: "#7fa4ff",
    fontSize: "16px",
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  title: {
    color: "#f3f7ff",
    fontSize: "34px",
    lineHeight: 1.25,
    fontWeight: 700,
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
  },
  list: {
    mt: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  item: {
    border: "1px solid #3e68a285",
    borderRadius: "14px",
    backgroundColor: "#11284a",
    p: "14px 16px",
  },
  itemTitle: {
    color: "#f3f7ff",
    fontSize: "22px",
    fontWeight: 700,
  },
  itemBody: {
    mt: "6px",
    color: "#c9d5ea",
    fontSize: "18px",
    lineHeight: 1.6,
    "@media (max-width: 640px)": {
      fontSize: "16px",
    },
  },
};

export const productCtaSx: SxMap = {
  card: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 280px",
    gap: "18px",
    minHeight: "220px",
    p: "16px",
    borderRadius: "20px",
    border: "1px solid #3a5d92",
    backgroundColor: "#13315a",
    "@media (max-width: 1000px)": {
      gridTemplateColumns: "1fr",
    },
  },
  copy: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
  },
  title: {
    color: "#fff",
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 700,
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
  },
  desc: {
    mt: "10px",
    color: "#d8e4f8",
    fontSize: "19px",
    lineHeight: 1.6,
    "@media (max-width: 900px)": {
      fontSize: "17px",
    },
  },
  button: {
    mt: 0,
  },
  buttonWrap: {
    display: "flex",
    justifyContent: "flex-start",
    mt: "auto",
    mb: "10px",
  },
  imageCard: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "14px",
    minHeight: "188px",
  },
};
