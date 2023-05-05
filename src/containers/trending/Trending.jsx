import React, { useEffect, useState } from "react";
import "./trending.css";
import axios from "axios";
import { SingleContent } from "../../components";

function Trending() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=2a8d5de7377efc1ff5a7bafcd4681b62`
        // `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setContent(res.data.results))
      .catch((err) => console.log("trending_err", err));
  };
  return (
    <div>
      <h1>trending</h1>
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
    </div>
  );
}

export default Trending;
