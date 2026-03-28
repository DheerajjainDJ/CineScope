import React, { useEffect, useCallback } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTvGenres,
  selectGenres,
  removeSelectedGenres,
} from "../../features/tv/tvSlice";
import SingleContent from "../../comps/singleContent/SingleContent";
import Shimmer from "../../comps/ShimmerUI/Shimmer";
import CustomPagination from "../../comps/customPagination/CustomPagination";
import Genres from "../../comps/Genres/Genres";
import useGenre from "../../comps/Genres/useGenre";
import { useGetTvDataQuery } from "../../services/tmdbCore";
import GenresShimmer from "../../comps/ShimmerUI/GenresShimmer";

const TV = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const { isGenresFetching, tvGenres, selectedTvGenres } = useSelector(
    (state) => state.tv,
  );
  const genreForUrl = useGenre(selectedTvGenres);
  const { data: tvData, isFetching } = useGetTvDataQuery({ page, genreForUrl });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!tvGenres.length) {
      dispatch(fetchTvGenres());
    }
  }, [dispatch]);

  const selectedGenreHandler = useCallback(
    (genre) => {
      dispatch(selectGenres(genre));
      navigate("/tv");
    },
    [dispatch, navigate],
  );

  const selectedDeletionHandler = useCallback(
    (genre) => {
      dispatch(removeSelectedGenres(genre));
      navigate("/tv");
    },
    [dispatch, navigate],
  );

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
          TV
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
      <Box py="16px" textAlign="center">
        {isGenresFetching ? (
          <GenresShimmer />
        ) : (
          <Genres
            genres={tvGenres}
            selectedGenres={selectedTvGenres}
            selectedGenreHandler={selectedGenreHandler}
            selectedDeletionHandler={selectedDeletionHandler}
          />
        )}
      </Box>
      {isFetching ? (
        <Shimmer />
      ) : (
        <Grid
          container
          spacing={5}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {tvData &&
            tvData?.results?.map((tvItem) => (
              <SingleContent key={tvItem.id} media_type="tv" {...tvItem} />
            ))}
        </Grid>
      )}
      <CustomPagination
        type="tv"
        page={Number(page) > 1 ? Number(page) : 1}
        totalPage={tvData?.total_pages > 200 ? 200 : tvData?.total_pages}
      />
    </Container>
  );
};

export default React.memo(TV);
