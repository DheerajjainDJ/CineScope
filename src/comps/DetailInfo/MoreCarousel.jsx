import React, { memo } from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SingleContent from "../singleContent/SingleContent";
import { useGetSimilarContentQuery } from "../../services/tmdbCore";

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
    background:
      "linear-gradient(to right, rgba(255,255,255,0.08), transparent)",
  },
});

const MoreCarousel = ({ id, type }) => {
  const { data: similarContent } = useGetSimilarContentQuery({ type, id });

  const hasSimilarData = similarContent?.results?.length > 0;

  if (!hasSimilarData) return null;

  return (
    <Section>
      <Container maxWidth="lg">
        <SectionTitle>More Like This</SectionTitle>
        <ScrollTrack>
          {similarContent.results.map((c) => (
            <Box key={c.id} sx={{ flex: "0 0 150px" }}>
              <SingleContent page="more" moreMediaType={type} {...c} />
            </Box>
          ))}
        </ScrollTrack>
      </Container>
    </Section>
  );
};

export default memo(MoreCarousel);
