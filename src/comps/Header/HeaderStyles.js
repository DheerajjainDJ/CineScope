import { styled } from "@mui/material/styles";
import { Box, Toolbar } from "@mui/material";

export const StyledNavbar = styled(Toolbar)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
  minHeight: "64px",
});

export const NavLinkItem = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 12px",
  borderRadius: "8px",
  fontSize: "0.88rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  transition: "color 0.25s ease, background 0.25s ease",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "12px",
    right: "12px",
    height: "2px",
    borderRadius: "2px",
    backgroundColor: "#FFDE00",
    transform: "scaleX(0)",
    transition: "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
    transformOrigin: "right center",
  },
  "&:hover": {
    color: "#fff",
    background: "rgba(255,255,255,0.06)",
    "&::after": {
      transform: "scaleX(1)",
      transformOrigin: "left center",
    },
  },
  "&.active": {
    color: "#FFDE00",
    "&::after": {
      transform: "scaleX(1)",
    },
  },
}));

export const DrawerBox = styled(Box)({
  width: "260px",
  height: "100%",
  backgroundColor: "#0d0d0d",
  borderLeft: "1px solid rgba(255,255,255,0.07)",
  display: "flex",
  flexDirection: "column",
  padding: "16px 0",
});

export const DrawerNavItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 24px",
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "rgba(255,255,255,0.7)",
  textDecoration: "none",
  transition: "color 0.2s ease, background 0.2s ease",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  "&:hover": {
    color: "#fff",
    background: "rgba(255,255,255,0.05)",
  },
  "&.active": {
    color: "#FFDE00",
    borderLeftColor: "#FFDE00",
    background: "rgba(255,222,0,0.05)",
  },
});
