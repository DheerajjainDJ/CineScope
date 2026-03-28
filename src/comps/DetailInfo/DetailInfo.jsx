import {
  Container,
  Stack,
  Box,
  Grid,
  Divider,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  CalendarMonthOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";
import React, { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import {
  HeroSection,
  ContentWrapper,
  PosterCard,
  MetaChip,
  OverViewText,
  OverviewReadMore,
  SectionLabel,
  GlassDivider,
} from "./DetailInfoStyles";
import { img_500, unavailable, durToHr, voteAverageColor } from "../../utils/utils";
import { useGetDetailInfoQuery } from "../../services/tmdbCore";
import DetailInfoShimmer from "../ShimmerUI/DetailInfoShimmer";

const MoreInfo = lazy(() => import("./MoreInfo"));
const SocialMediaHandles = lazy(() => import("./SocialMediaHandles"));

const DetailInfo = () => {
  const { id, type } = useParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const { data: content, isFetching } = useGetDetailInfoQuery({ type, id });

  const handleIsReadMore = () => setIsReadMore((prev) => !prev);

  const releaseDate = content?.release_date || content?.first_air_date;
  const releaseYear = releaseDate?.split("-")[0];
  const formattedDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const duration =
    type === "movie"
      ? durToHr(content?.runtime)
      : durToHr(content?.episode_run_time);

  const genres = content?.genres?.map((g) => g.name).join(" · ");
  const ratingColor = content?.vote_average
    ? voteAverageColor(content.vote_average)
    : "gray";

  return (
    <>
      {isFetching ? (
        <DetailInfoShimmer />
      ) : (
        <HeroSection
          sx={{
            backgroundImage: content?.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${content.backdrop_path})`
              : "none",
            backgroundColor: "#0a0a0a",
          }}
        >
          <ContentWrapper>
            <Container maxWidth="lg">
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

                {/* Poster */}
                <Grid size={{ xs: 12, sm: 4, md: 4, lg: 3.5 }}>
                  <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
                    <PosterCard>
                      <Box
                        component="img"
                        src={
                          content?.poster_path
                            ? `${img_500}${content.poster_path}`
                            : unavailable
                        }
                        alt={content?.title || content?.name}
                        sx={{
                          width: "100%",
                          aspectRatio: "2/3",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </PosterCard>
                  </Box>
                </Grid>

                {/* Info */}
                <Grid size={{ xs: 12, sm: 8, md: 8, lg: 8.5 }}>
                  <Box sx={{ pt: { xs: 0, md: 3 } }}>

                    {/* Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: "#fff",
                        mb: 0.5,
                      }}
                    >
                      {content?.title || content?.name}
                      {releaseYear && (
                        <Typography
                          component="span"
                          sx={{
                            fontSize: { xs: "1.2rem", md: "1.6rem" },
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.4)",
                            ml: 1.5,
                          }}
                        >
                          ({releaseYear})
                        </Typography>
                      )}
                    </Typography>

                    {/* Tagline */}
                    {content?.tagline && (
                      <Typography
                        sx={{
                          fontStyle: "italic",
                          fontSize: { xs: "0.95rem", md: "1.1rem" },
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 400,
                          letterSpacing: "0.02em",
                          mb: 2,
                          mt: 0.5,
                          pl: 1.5,
                          borderLeft: "2px solid rgba(255,222,0,0.5)",
                        }}
                      >
                        "{content.tagline}"
                      </Typography>
                    )}

                    {/* Genres */}
                    {genres && (
                      <Stack direction="row" flexWrap="wrap" gap={0.8} mb={1.5}>
                        {content.genres.map((g) => (
                          <Box
                            key={g.id}
                            sx={{
                              px: 1.2,
                              py: 0.3,
                              borderRadius: "6px",
                              border: "1px solid rgba(255,222,0,0.3)",
                              backgroundColor: "rgba(255,222,0,0.07)",
                              fontSize: "0.72rem",
                              fontWeight: 600,
                              color: "rgba(255,222,0,0.85)",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                            }}
                          >
                            {g.name}
                          </Box>
                        ))}
                      </Stack>
                    )}

                    <GlassDivider />

                    {/* Meta row */}
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      gap={1.2}
                      alignItems="center"
                      mb={3}
                    >
                      {/* Rating — TMDB-style ring */}
                      {content?.vote_average > 0 && (() => {
                        const pct = Math.round(content.vote_average * 10);
                        const r = 26;
                        const circ = 2 * Math.PI * r;
                        const offset = circ * (1 - pct / 100);
                        return (
                          <Stack direction="row" alignItems="center" gap={1.5}>
                            <Box sx={{ position: "relative", width: 68, height: 68, flexShrink: 0 }}>
                              <svg width="68" height="68" style={{ transform: "rotate(-90deg)" }}>
                                <circle cx="34" cy="34" r={r} fill="#0d1117" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                                <circle
                                  cx="34" cy="34" r={r}
                                  fill="none"
                                  stroke={ratingColor}
                                  strokeWidth="5"
                                  strokeDasharray={circ}
                                  strokeDashoffset={offset}
                                  strokeLinecap="round"
                                  style={{ filter: `drop-shadow(0 0 4px ${ratingColor}99)` }}
                                />
                              </svg>
                              <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
                                  {pct}
                                  <Typography component="sup" sx={{ fontSize: "0.45rem", fontWeight: 700, verticalAlign: "super" }}>%</Typography>
                                </Typography>
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.45)", lineHeight: 1.4, maxWidth: "56px" }}>
                              User Score
                            </Typography>
                          </Stack>
                        );
                      })()}

                      {duration && (
                        <MetaChip>
                          <AccessTimeOutlined sx={{ fontSize: "0.9rem" }} />
                          {duration}
                        </MetaChip>
                      )}

                      {formattedDate && (
                        <MetaChip>
                          <CalendarMonthOutlined sx={{ fontSize: "0.9rem" }} />
                          {formattedDate}
                        </MetaChip>
                      )}
                    </Stack>

                    {/* Social handles */}
                    <Box mb={2}>
                      <Suspense fallback={<CircularProgress size={20} />}>
                        <SocialMediaHandles id={id} type={type} />
                      </Suspense>
                    </Box>

                    {/* Overview */}
                    {content?.overview && (
                      <Box>
                        <SectionLabel>Overview</SectionLabel>
                        <OverViewText component="p">
                          {isReadMore
                            ? content.overview.slice(0, 200)
                            : content.overview}
                          <OverviewReadMore onClick={handleIsReadMore}>
                            {isReadMore ? " …more" : " less"}
                          </OverviewReadMore>
                        </OverViewText>
                      </Box>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </ContentWrapper>
        </HeroSection>
      )}

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      <Suspense fallback={<CircularProgress />}>
        <MoreInfo id={id} type={type} />
      </Suspense>
    </>
  );
};

export default React.memo(DetailInfo);
