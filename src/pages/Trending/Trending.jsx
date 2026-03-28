import React from "react";
import { Box, Pagination, Container, Grid, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useGetTrendingDataQuery } from "../../services/tmdbCore";
import Shimmer from "../../comps/ShimmerUI/Shimmer";
import SingleContent from "../../comps/singleContent/SingleContent";

const Trending = () => {
  const { page } = useParams();
  const { data: trending, isFetching } = useGetTrendingDataQuery(page);
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    window.scroll(0, 0);
    if (value === 1) {
      return navigate("/");
    }
    navigate(`/${value}`);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          textAlign: "center",
          py: { xs: "28px", md: "14px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "inline-block",
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            background:
              "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.5) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trending
        </Typography>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            background: "linear-gradient(90deg, #ffde00, transparent)",
            borderRadius: "2px",
            margin: "10px auto 0",
          }}
        />
      </Box>
      {isFetching ? (
        <Shimmer />
      ) : (
        <Grid
          container
          direction="row"
          spacing={5}
          alignItems="center"
          justifyContent="center"
          pb="10px"
        >
          {trending?.results &&
            trending?.results?.map((trendingItem) => (
              <SingleContent
                page="trending"
                key={trendingItem.id}
                {...trendingItem}
              />
            ))}
        </Grid>
      )}

      <Box
        sx={{
          width: { xs: "90%", sm: "100%" },
          display: "flex",
          justifyContent: "center",
          margin: "30px auto",
        }}
      >
        <Pagination
          count={trending?.total_pages > 400 ? 400 : trending?.total_pages}
          defaultPage={1}
          page={Number(page) > 1 ? Number(page) : 1}
          color="secondary"
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default React.memo(Trending);
