import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Box,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { Menu, CloseRounded, LocalMovies } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";
import { DesktopNav, MobileNav } from "./NavList";
import { StyledNavbar, DrawerBox } from "./HeaderStyles";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawer = () => setDrawer((prev) => !prev);

  useEffect(() => {
    const scroller = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollValue((scrollTop / height) * 100);
      setScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", scroller);
    return () => window.removeEventListener("scroll", scroller);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: scrolled
            ? "rgba(10,10,10,0.92)"
            : "rgba(10,10,10,0.75)",
          backdropFilter: "blur(14px)",
          boxShadow: scrolled
            ? "0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)"
            : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <StyledNavbar>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalMovies sx={{ color: "#FFDE00", fontSize: "1.6rem" }} />
                <Typography
                  sx={{
                    fontSize: { xs: "1.1rem", md: "1.4rem" },
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#fff",
                    "& span": { color: "#FFDE00" },
                  }}
                >
                  Cine<span>Scope</span>
                </Typography>
              </Box>
            </Link>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <DesktopNav />
            </Box>

            {/* Mobile hamburger */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={handleDrawer}
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  "&:hover": {
                    color: "#FFDE00",
                    background: "rgba(255,222,0,0.08)",
                  },
                }}
              >
                <Menu />
              </IconButton>

              <Drawer open={drawer} anchor="right" onClose={handleDrawer}>
                <DrawerBox>
                  {/* Drawer header */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 3,
                      py: 2,
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <LocalMovies
                        sx={{ color: "#FFDE00", fontSize: "1.3rem" }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: "1rem",
                          color: "#fff",
                          "& span": { color: "#FFDE00" },
                        }}
                      >
                        Movies<span>verse</span>
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={handleDrawer}
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      <CloseRounded fontSize="small" />
                    </IconButton>
                  </Box>

                  <MobileNav onClose={handleDrawer} />
                </DrawerBox>
              </Drawer>
            </Box>
          </StyledNavbar>
        </Container>
      </AppBar>

      {/* Scroll progress bar */}
      <Box
        sx={{
          height: "2px",
          backgroundColor: "#FFDE00",
          boxShadow: "0 0 8px rgba(255,222,0,0.6)",
          width: `${scrollValue}%`,
          position: "fixed",
          top: { xs: "56px", md: "64px" },
          left: 0,
          zIndex: 1200,
          transition: "width 0.1s linear",
        }}
      />

      <Outlet />
    </>
  );
};

export default React.memo(Header);
