import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { img_300 } from "../../utils/utils";

const ScrollTrack = styled(Box)({
  display: "flex",
  gap: "16px",
  overflowX: "auto",
  paddingBottom: "12px",
  paddingTop: "4px",
  "&::-webkit-scrollbar": { height: "4px" },
  "&::-webkit-scrollbar-track": { background: "transparent" },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(255,222,0,0.3)",
    borderRadius: "4px",
  },
});

const PersonCard = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: "110px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  transition: theme.transitions.create(["transform"], { duration: 300 }),
  cursor: "default",
  "&:hover": { transform: "translateY(-4px)" },
  "&:hover .avatar-ring": {
    boxShadow: "0 0 0 2px #FFDE00, 0 0 20px rgba(255,222,0,0.25)",
  },
}));

const Avatar = styled("img")({
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  objectFit: "cover",
  display: "block",
  transition: "box-shadow 0.3s ease",
});

const AvatarFallback = styled(Box)({
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #2a2a2a, #1a1a1a)",
  border: "1px solid rgba(255,255,255,0.1)",
  transition: "box-shadow 0.3s ease",
  flexShrink: 0,
});

const CastCarousel = ({ carouselContent }) => {
  return (
    <ScrollTrack>
      {carouselContent?.map((c) => (
        <PersonCard key={`${c.id}-${c.character || c.job}`}>
          {c?.profile_path ? (
            <Avatar
              className="avatar-ring"
              loading="lazy"
              src={`${img_300}${c.profile_path}`}
              alt={c.name}
            />
          ) : (
            <AvatarFallback className="avatar-ring">
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "-0.02em",
                }}
              >
                {c?.name
                  ?.split(" ")
                  .slice(0, 2)
                  .map((n) => n.charAt(0))
                  .join("")}
              </Typography>
            </AvatarFallback>
          )}

          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography
              sx={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {c?.name}
            </Typography>
            {(c?.character || c?.job) && (
              <Typography
                sx={{
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 500,
                  mt: 0.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.3,
                }}
              >
                {c?.character || c?.job}
              </Typography>
            )}
          </Box>
        </PersonCard>
      ))}
    </ScrollTrack>
  );
};

export default memo(CastCarousel);