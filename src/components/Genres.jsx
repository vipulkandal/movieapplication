import axios from "axios";
import { REACT_APP_API_KEY } from "../config/config";
import { useEffect } from "react";
import { Chip } from "@mui/material";
const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    // Both array is merged; There will be multiple values too
    setSelectedGenres([...selectedGenres, genre]);

    // Filtering the unique values present in merged array
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`
    // );

    // setGenres(data.genres);

    await axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.log("fetchGenres", err));
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {
        // selectedGenres & genres both are displayed over one another
        // to avoid the overlap of we remove selected Genre from genres and add to SelectedGenres
        selectedGenres &&
          selectedGenres.map((genre) => (
            <Chip
              label={genre.name}
              style={{ margin: 2 }}
              size="small"
              key={genre.id}
              color={"primary"}
              clickable
              onDelete={() => handleRemove(genre)}
            />
          ))
      }
      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
