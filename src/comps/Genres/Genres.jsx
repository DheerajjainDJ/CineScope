import React from "react";
import { ChipBox, StyledChip } from "./genresStyles";

const Genres = (props) => {
  const {
    genres,
    selectedGenres,
    selectedGenreHandler,
    selectedDeletionHandler,
  } = props;

  return (
    <ChipBox>
      {selectedGenres &&
        selectedGenres?.map((sg) => (
          <StyledChip
            key={sg.id}
            label={sg.name}
            clickable
            size="medium"
            color="success"
            variant="outlined"
            onDelete={() => selectedDeletionHandler(sg)}
            sx={{ margin: "5px" }}
          />
        ))}

      {genres &&
        genres?.map((genre) => (
          <StyledChip
            key={genre.id}
            label={genre.name}
            clickable
            onClick={() => selectedGenreHandler(genre)}
            size="medium"
            variant="outlined"
            sx={{ margin: "5px" }}
          />
        ))}
    </ChipBox>
  );
};

export default React.memo(Genres);
