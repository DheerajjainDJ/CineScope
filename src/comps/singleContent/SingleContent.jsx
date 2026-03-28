import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { MovieOutlined, TvOutlined } from "@mui/icons-material";
import { img_500, unavailable, voteAverageColor } from "../../utils/utils";
import {
  MovieCard,
  CardImage,
  CardOverlay,
  RatingBadge,
} from "./singleContentStyle";
import { Link } from "react-router-dom";

const SingleContent = (props) => {
  const {
    page,
    moreMediaType,
    id,
    title,
    original_title,
    name,
    original_name,
    poster_path,
    vote_average,
    media_type,
  } = props;

  const displayTitle = title || original_title || name || original_name;
  const hasRating = vote_average && vote_average !== 0;
  const showMediaBadge =
    (page === "trending" || page === "search") && media_type;
  const releaseYear = (props.release_date || props.first_air_date)?.split(
    "-",
  )[0];
  const isTV = media_type === "tv";

  return (
    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }}>
      <Link
        to={`/info/${moreMediaType ? moreMediaType : media_type}/${id}`}
        onClick={() => window.scroll(0, 0)}
        style={{ textDecoration: "none", display: "block" }}
      >
        <MovieCard>
          <Box
            sx={{
              position: "relative",
              aspectRatio: "2/3",
              overflow: "hidden",
            }}
          >
            <CardImage
              className="sc-image"
              loading="lazy"
              src={poster_path ? `${img_500}${poster_path}` : unavailable}
              alt={displayTitle}
            />

            {/* Rating badge — top right */}
            {hasRating ? (
              <RatingBadge ratingcolor={voteAverageColor(vote_average)}>
                <Typography
                  sx={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  {vote_average.toFixed(1)}
                </Typography>
              </RatingBadge>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  px: 1,
                  py: 0.3,
                  borderRadius: "8px",
                  backgroundColor: "rgba(0,0,0,0.55)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(6px)",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  NR
                </Typography>
              </Box>
            )}

            {/* Bottom overlay — media type icon + title */}
            <CardOverlay className="sc-overlay">
              {showMediaBadge && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 0.6,
                    opacity: 0.7,
                  }}
                >
                  {isTV ? (
                    <TvOutlined sx={{ fontSize: "0.8rem", color: "#fff" }} />
                  ) : (
                    <MovieOutlined sx={{ fontSize: "0.8rem", color: "#fff" }} />
                  )}
                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {isTV ? "TV Show" : "Movie"}
                  </Typography>
                </Box>
              )}
              <Typography
                sx={{
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.35,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textShadow: "0 1px 6px rgba(0,0,0,0.9)",
                  letterSpacing: "0.01em",
                }}
              >
                {displayTitle}
              </Typography>
              {releaseYear && (
                <Typography
                  sx={{
                    fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                    mt: 0.5,
                    letterSpacing: "0.04em",
                  }}
                >
                  {releaseYear}
                </Typography>
              )}
            </CardOverlay>
          </Box>
        </MovieCard>
      </Link>
    </Grid>
  );
};

export default React.memo(SingleContent);
