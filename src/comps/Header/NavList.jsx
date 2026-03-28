import React from "react";
import { Stack, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Whatshot, Movie, Tv, Search } from "@mui/icons-material";
import { NavLinkItem, DrawerNavItem } from "./HeaderStyles";

const navItems = [
  { to: "/", label: "Trending", icon: <Whatshot fontSize="small" /> },
  { to: "/movies", label: "Movies", icon: <Movie fontSize="small" /> },
  { to: "/tv", label: "TV", icon: <Tv fontSize="small" /> },
  { to: "/search", label: "Search", icon: <Search fontSize="small" /> },
];

export const DesktopNav = () => (
  <Stack direction="row" alignItems="center" gap={0.5}>
    {navItems.map(({ to, label, icon }) => (
      <NavLink key={to} to={to} end={to === "/"} style={{ textDecoration: "none" }}>
        {({ isActive }) => (
          <NavLinkItem className={isActive ? "active" : ""}>
            <Box sx={{ display: "flex", alignItems: "center", opacity: 0.75 }}>
              {icon}
            </Box>
            {label}
          </NavLinkItem>
        )}
      </NavLink>
    ))}
  </Stack>
);

export const MobileNav = ({ onClose }) => (
  <Box>
    {navItems.map(({ to, label, icon }) => (
      <NavLink key={to} to={to} end={to === "/"} style={{ textDecoration: "none" }} onClick={onClose}>
        {({ isActive }) => (
          <DrawerNavItem className={isActive ? "active" : ""}>
            <Box sx={{ display: "flex", alignItems: "center", opacity: 0.7 }}>
              {icon}
            </Box>
            {label}
          </DrawerNavItem>
        )}
      </NavLink>
    ))}
  </Box>
);

export default DesktopNav;
