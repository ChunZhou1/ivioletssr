import type { SxProps, Theme } from "@mui/material/styles";

type SxMap = Record<string, SxProps<Theme>>;

export const sharedSx: SxMap = {
  pageRoot: {
    minHeight: "100vh",
    backgroundColor: "#070f1f",
    color: "#f3f7ff",
  },
  sectionInner: {
    width: "min(1296px, calc(100% - 32px))",
    mx: "auto",
    "@media (max-width: 640px)": {
      width: "min(1296px, calc(100% - 24px))",
    },
  },
  sectionEyebrow: {
    mb: "10px",
    color: "#7fa4ff",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.04em",
  },
  sectionTitle: {
    color: "#f3f7ff",
    fontSize: "42px",
    lineHeight: 1.2,
    fontWeight: 700,
    "@media (max-width: 640px)": {
      fontSize: "32px",
    },
  },
};

export const headerSx: SxMap = {
  section: {
    borderBottom: "1px solid #1b2e54",
    backgroundColor: "#0a1630",
    py: "28px",
    "@media (max-width: 640px)": {
      pt: "20px",
    },
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  brandGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
  },
  logoBadge: {
    position: "relative",
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "1px solid #c6daff88",
    background: "linear-gradient(135deg, #89b7ff 0%, #2e5ce6 100%)",
    boxShadow: "0 8px 20px #1835727a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoDot: {
    position: "absolute",
    top: "5px",
    left: "5px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#ffffff55",
  },
  logoWord: {
    position: "relative",
    zIndex: 1,
    color: "#fff",
    fontSize: "18px",
    fontWeight: 800,
    lineHeight: 1,
  },
  logoSpark: {
    position: "absolute",
    top: "5px",
    right: "5px",
    color: "#dce8ff",
    fontSize: "11px !important",
  },
  brandText: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
    "@media (max-width: 640px)": {
      fontSize: "17px",
    },
  },
  topContacts: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "10px",
    "@media (max-width: 900px)": {
      width: "100%",
      justifyContent: "flex-start",
    },
  },
  topContactLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    minHeight: "36px",
    px: "12px",
    borderRadius: "999px",
    border: "1px solid #83a3e384",
    backgroundColor: "#162a4fd9",
    color: "#e7ecf8",
    fontSize: "14px",
    textDecoration: "none",
    transition: "background-color 0.2s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "#1d3c71",
      transform: "translateY(-1px)",
    },
  },
  topIcon: {
    color: "#a6beff",
    fontSize: "18px !important",
  },
  bannerCard: {
    position: "relative",
    overflow: "hidden",
    minHeight: "420px",
    mt: "22px",
    borderRadius: "28px",
    border: "1px solid #7f97cc52",
    "@media (max-width: 900px)": {
      minHeight: "340px",
    },
  },
  bannerImage: {
    objectFit: "cover",
  },
  bannerOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, #08101fe0 0%, #08101f8a 48%, #08101fa8 100%)",
  },
  bannerCopy: {
    position: "relative",
    zIndex: 1,
    maxWidth: "620px",
    p: "60px 56px",
    "@media (max-width: 900px)": {
      p: "34px 28px",
    },
  },
  heroTag: {
    mb: "12px",
    color: "#a7d4ff",
    fontSize: "16px",
    fontWeight: 500,
  },
  heroTitle: {
    color: "#fff",
    fontSize: "48px",
    lineHeight: 1.2,
    fontWeight: 700,
    "@media (max-width: 1200px)": {
      fontSize: "40px",
    },
    "@media (max-width: 900px)": {
      fontSize: "34px",
    },
  },
  heroDesc: {
    mt: "14px",
    color: "#d7e2f4",
    fontSize: "20px",
    lineHeight: 1.6,
    "@media (max-width: 900px)": {
      fontSize: "17px",
    },
  },
  thumbnailRow: {
    mt: "12px",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "12px",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  thumbnailItem: {
    position: "relative",
    overflow: "hidden",
    height: "92px",
    borderRadius: "14px",
    border: "1px solid #7fa4ff66",
    "@media (max-width: 900px)": {
      height: "110px",
    },
  },
  thumbnailImage: {
    objectFit: "cover",
  },
};

export const introSx: SxMap = {
  section: {
    borderTop: "1px solid #102245",
    backgroundColor: "#0d1a32",
    py: "56px",
  },
  body: {
    mt: "22px",
    display: "grid",
    gridTemplateColumns: "minmax(320px, 440px) minmax(0, 1fr)",
    gap: "28px",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  imageCard: {
    position: "relative",
    overflow: "hidden",
    minHeight: "300px",
    borderRadius: "24px",
    border: "1px solid #355a8f80",
  },
  image: {
    objectFit: "cover",
  },
  copy: {
    color: "#c3d1ea",
    fontSize: "18px",
    lineHeight: 1.7,
    "@media (max-width: 640px)": {
      fontSize: "16px",
    },
  },
  pillsRow: {
    mt: "22px",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "1fr",
    },
  },
  pillLink: {
    minHeight: "64px",
    px: "20px",
    borderRadius: "18px",
    border: "1px solid #8cb2ff99",
    background: "linear-gradient(180deg, #2d64f5 0%, #2348b8 100%)",
    boxShadow: "0 8px 18px #15317888",
    color: "#f7fbff",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    fontSize: "18px",
    fontWeight: 600,
    transition: "transform 0.2s ease, filter 0.2s ease",
    "&:hover": {
      filter: "brightness(1.08)",
      transform: "translateY(-1px)",
    },
  },
  pillIcon: {
    color: "#e8f1ff",
    fontSize: "24px !important",
  },
};

export const productSx: SxMap = {
  section: {
    borderTop: "1px solid #112449",
    backgroundColor: "#0a152b",
    py: "56px",
  },
  grid: {
    mt: "16px",
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    p: "14px",
    borderRadius: "18px",
    border: "1px solid #3a5d9299",
    backgroundColor: "#122645",
    boxShadow: "0 12px 26px #00000045",
  },
  imageCard: {
    position: "relative",
    overflow: "hidden",
    height: "220px",
    borderRadius: "12px",
  },
  image: {
    objectFit: "cover",
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  titleIcon: {
    color: "#8faeff",
    fontSize: "28px !important",
  },
  title: {
    color: "#f4f8ff",
    fontSize: "22px",
    fontWeight: 700,
  },
  desc: {
    color: "#c5d2ea",
    fontSize: "16px",
    lineHeight: 1.6,
  },
  cardButton: {
    mt: "auto",
    alignSelf: "flex-start",
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    minHeight: "34px",
    px: "12px",
    borderRadius: "999px",
    border: "1px solid #8fb1ff99",
    background: "linear-gradient(180deg, #2d64f5 0%, #2348b8 100%)",
    color: "#f6faff",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 700,
    transition: "transform 0.2s ease, filter 0.2s ease",
    "&:hover": {
      filter: "brightness(1.08)",
      transform: "translateY(-1px)",
    },
  },
  cardButtonIcon: {
    fontSize: "16px !important",
  },
};

export const contactSx: SxMap = {
  section: {
    borderTop: "1px solid #12294f",
    backgroundColor: "#0d1c36",
    py: "56px",
  },
  desc: {
    maxWidth: "760px",
    mt: "14px",
    color: "#c9d5ea",
    fontSize: "20px",
    lineHeight: 1.6,
    "@media (max-width: 640px)": {
      fontSize: "17px",
    },
  },
  body: {
    mt: "20px",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 430px",
    gap: "30px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "1fr",
    },
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  infoRow: {
    minHeight: "54px",
    px: "14px",
    borderRadius: "14px",
    border: "1px solid #3e68a285",
    backgroundColor: "#11284a",
    color: "#f3f7ff",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: 500,
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#183864",
    },
  },
  infoIcon: {
    color: "#b4c9ff",
    fontSize: "22px !important",
  },
  consultCard: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    p: "14px",
    borderRadius: "18px",
    border: "1px solid #3a5d92",
    backgroundColor: "#13315a",
    "@media (max-width: 1200px)": {
      maxWidth: "560px",
    },
  },
  consultImage: {
    position: "relative",
    overflow: "hidden",
    height: "122px",
    borderRadius: "12px",
  },
  consultImageItem: {
    objectFit: "cover",
  },
  consultTitle: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: 700,
    "@media (max-width: 640px)": {
      fontSize: "24px",
    },
  },
  consultDesc: {
    color: "#d8e4f8",
    fontSize: "15px",
    lineHeight: 1.6,
  },
  primaryButton: {
    alignSelf: "flex-start",
    minHeight: "44px",
    px: "22px",
    borderRadius: "999px",
    border: "1px solid #c9d9ff99",
    background: "linear-gradient(180deg, #6a90ff 0%, #456bde 100%)",
    boxShadow: "0 10px 22px #1a3e9b66",
    color: "#fff",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 700,
    transition: "transform 0.2s ease, filter 0.2s ease",
    "&:hover": {
      filter: "brightness(1.08)",
      transform: "translateY(-1px)",
    },
  },
};
