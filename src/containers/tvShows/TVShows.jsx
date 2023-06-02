import React, { useEffect, useState } from "react";
import "./tvShows.css";
import axios from "axios";
import useGenres from "../../hooks/useGenre";
import { REACT_APP_API_KEY } from "../../config/config";
import { SingleContent, CustomPagination, Genres } from "../../components";

function TVShows() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  // Custom hook
  const genreForURL = useGenres(selectedGenres);

  const fetchTvShows = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
      )
      .then((res) => {
        setContent(res.data.results);
        setNumberOfPages(res.data.total_pages);
      });
  };

  useEffect(() => {
    fetchTvShows();
  }, [page, genreForURL]);
  return (
    <div>
      <span className="pageTitle">TV Shows</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="tvShows content">
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
                media_type="tv"
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

export default TVShows;
