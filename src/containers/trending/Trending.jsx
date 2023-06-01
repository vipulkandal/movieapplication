import React, { Component, useEffect, useState } from "react";
import "./trending.css";
import axios from "axios";
import { REACT_APP_API_KEY } from "../../config/config";
import { SingleContent, CustomPagination } from "../../components";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  // Better solution is to have .env file
  // const REACT_APP_API_KEY = "2a8d5de7377efc1ff5a7bafcd4681b62";

  useEffect(() => {
    fetchTrending();
    // console.log("process.env.REACT_APP_API_KEY", process.env.REACT_APP_API_KEY);
  }, [page]);

  const fetchTrending = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_API_KEY}&page=${page}`
        // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setContent(res.data.results))
      .catch((err) => console.log("trending_err", err));
  };
  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
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
                media_type={item.media_type}
                vote_average={item.vote_average}
              />
            );
          })}
      </div>
      {/* Here setPage is used as a callback Function not value */}
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
