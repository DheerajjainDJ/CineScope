import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "100vh",
  backgroundPosition: "center top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  color: "#fff",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.3) 100%)",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "180px",
    background:
      "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)",
    zIndex: 0,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "auto",
    alignItems: "flex-start",
    "&::before": {
      background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.95) 60%)",
    },
  },
}));

export const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 1,
  width: "100%",
  paddingTop: "60px",
  paddingBottom: "80px",
});

export const PosterCard = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow:
    "0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
  transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow:
      "0 24px 64px rgba(0,0,0,0.8), 0 0 0 1.5px rgba(255,222,0,0.3), 0 0 48px rgba(255,222,0,0.08)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "260px",
    margin: "0 auto",
  },
}));

export const MetaChip = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  padding: "4px 12px",
  borderRadius: "20px",
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(8px)",
  fontSize: "0.8rem",
  color: "rgba(255,255,255,0.85)",
  fontWeight: 500,
  letterSpacing: "0.02em",
});

export const RatingRing = styled(Box)(({ ratingcolor }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: `radial-gradient(circle at 35% 35%, ${ratingcolor}bb, ${ratingcolor}ff)`,
  boxShadow: `0 0 20px ${ratingcolor}66, inset 0 1px 2px rgba(255,255,255,0.3)`,
  border: "2.5px solid rgba(255,255,255,0.2)",
  flexShrink: 0,
}));

export const OverViewText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.8,
  textAlign: "justify",
  marginTop: "8px",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.92rem",
  },
}));

export const OverviewReadMore = styled("span")({
  display: "inline",
  cursor: "pointer",
  color: "#FFDE00",
  fontWeight: 600,
  fontSize: "0.85rem",
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 0.75,
  },
});

export const SectionLabel = styled(Typography)({
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.4)",
  marginBottom: "6px",
});

export const GlassDivider = styled(Box)({
  height: "1px",
  background: "linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
  margin: "20px 0",
});
