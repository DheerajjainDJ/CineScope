import axios from "axios";
import { useEffect, useState } from "react";

export function useDebouncedSearch(searchText, skipSuggestion) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (skipSuggestion) {
      return;
    }
    const abortController = new AbortController();
    const fetchSuggestions = async () => {
      const trimmedSearchText = searchText.trim();

      if (!trimmedSearchText) {
        return;
      }
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${trimmedSearchText}&include_adult=false`,
          {
            signal: abortController.signal,
          },
        );
        setSuggestions(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 500);

    return () => {
      clearTimeout(timeout);
      abortController.abort();
    };
  }, [searchText, skipSuggestion]);

  return { suggestions, setSuggestions };
}
