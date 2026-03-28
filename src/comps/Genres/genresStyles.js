import { styled } from "@mui/material/styles";
import { Box, Chip } from "@mui/material";

export const ChipBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: "unset",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "0px",
    },
  },
}));

export const StyledChip = styled(Chip)(({ color }) => ({
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "0.5px",
  fontSize: "0.78rem",
  borderRadius: "20px",
  backdropFilter: "blur(6px)",
  transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
  border: "1px solid rgba(255,255,255,0.18)",

  ...(color === "success"
    ? {
        background: "linear-gradient(135deg, #1db954 0%, #17a34a 100%)",
        boxShadow: "0 0 10px rgba(29,185,84,0.55), 0 2px 8px rgba(0,0,0,0.3)",
        border: "1px solid #1db954",
        "& .MuiChip-deleteIcon": {
          color: "rgba(255,255,255,0.75)",
          "&:hover": { color: "#fff" },
        },
      }
    : {
        background: "rgba(255,255,255,0.07)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
      }),

  "&:hover": {
    transform: "scale(1.1) translateY(-2px)",
    boxShadow:
      color === "success"
        ? "0 0 18px rgba(29,185,84,0.75), 0 4px 14px rgba(0,0,0,0.4)"
        : "0 0 14px rgba(255,255,255,0.25), 0 4px 12px rgba(0,0,0,0.35)",
    background:
      color === "success"
        ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
        : "rgba(255,255,255,0.15)",
    fontWeight: 700,
  },

  "&:active": {
    transform: "scale(0.97)",
  },
}));
