import React, { Suspense } from "react";
import { useGetCastAndCrewQuery } from "../../services/tmdbCore";
import { Box, Container, Typography, Skeleton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Carousel from "./Carousel";

const Section = styled(Box)({
  backgroundColor: "#0f0f0f",
  padding: "32px 0",
  borderTop: "1px solid rgba(255,255,255,0.05)",
});

const SectionTitle = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "&::after": {
    content: '""',
    flex: 1,
    height: "1px",
    background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
  },
});

const CarouselShimmer = () => (
  <Stack direction="row" gap={2} sx={{ overflow: "hidden" }}>
    {Array(6).fill("").map((_, i) => (
      <Box key={i} sx={{ flexShrink: 0, width: 120, display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
        <Skeleton variant="circular" width={90} height={90} animation="wave" sx={{ bgcolor: "grey.900" }} />
        <Skeleton variant="text" width={80} height={14} animation="wave" sx={{ bgcolor: "grey.900" }} />
        <Skeleton variant="text" width={60} height={12} animation="wave" sx={{ bgcolor: "grey.900" }} />
      </Box>
    ))}
  </Stack>
);

const CastAndCrew = ({ id, type }) => {
  const { data: content } = useGetCastAndCrewQuery({ type, id });

  const hasCast = content?.cast?.length > 0;
  const hasCrew = content?.crew?.length > 0;

  if (!hasCast && !hasCrew) return null;

  return (
    <>
      {hasCast && (
        <Section>
          <Container maxWidth="lg">
            <SectionTitle>Cast</SectionTitle>
            <Suspense fallback={<CarouselShimmer />}>
              <Carousel carouselContent={content.cast} />
            </Suspense>
          </Container>
        </Section>
      )}

      {hasCrew && (
        <Section>
          <Container maxWidth="lg">
            <SectionTitle>Crew</SectionTitle>
            <Suspense fallback={<CarouselShimmer />}>
              <Carousel carouselContent={content.crew} />
            </Suspense>
          </Container>
        </Section>
      )}
    </>
  );
};

export default CastAndCrew;