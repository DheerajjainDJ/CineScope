import { styled } from "@mui/material/styles";
import { Box, Card } from "@mui/material";

export const MovieCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  background: "#111",
  boxShadow:
    "0 2px 8px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.35)",
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: 360,
    easing: theme.transitions.easing.easeInOut,
  }),
  "&:hover": {
    transform: "translateY(-10px) scale(1.025)",
    boxShadow:
      "0 16px 48px rgba(0,0,0,0.7), 0 0 0 1.5px rgba(255,222,0,0.35), 0 0 40px rgba(255,222,0,0.12)",
  },
  "&:hover .sc-image": {
    transform: "scale(1.08)",
    filter: "brightness(0.65)",
  },
  "&:hover .sc-overlay": {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.05) 100%)",
  },
}));

export const CardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition:
    "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.55s ease",
});

export const CardOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 45%, transparent 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "16px",
  transition: "background 0.4s ease",
});

export const RatingBadge = styled(Box, {
  shouldForwardProp: (p) => p !== "ratingcolor",
})(({ ratingcolor }) => ({
  position: "absolute",
  top: 12,
  right: 12,
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `radial-gradient(circle at 30% 30%, ${ratingcolor}cc, ${ratingcolor})`,
  boxShadow: `0 0 14px ${ratingcolor}88, inset 0 1px 1px rgba(255,255,255,0.25)`,
  border: "2px solid rgba(255,255,255,0.22)",
  backdropFilter: "blur(6px)",
  zIndex: 2,
}));
