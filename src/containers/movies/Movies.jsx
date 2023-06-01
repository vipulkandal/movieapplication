import React, { useEffect, useState } from "react";
import "./movies.css";
import axios from "axios";
import { REACT_APP_API_KEY } from "../../config/config";
import { SingleContent, CustomPagination, Genres } from "../../components";

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const fetchMovies = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      )
      .then((res) => {
        setContent(res.data.results);
        setNumberOfPages(res.data.total_pages);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="movies content">
        {content?.length > 0 &&
          content.map((item) => {
            return (
              <SingleContent
                key={item.id}
                data={item}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="movie"
                vote_average={item.vote_average}
              />
            );
          })}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Movies;
