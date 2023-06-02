import React, { useEffect, useState } from "react";
import "./search.css";
import {
  Button,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { REACT_APP_API_KEY } from "../../config/config";
import axios from "axios";
import { CustomPagination, SingleContent } from "../../components";

function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();

  const lightTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=${REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      )
      .then((res) => setContent(res.data.results))
      .catch((err) => console.log("fetchSearch", err));
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <div className="search">
      <ThemeProvider theme={lightTheme}>
        <div style={{ display: "flex", margin: "10px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={() => fetchSearch()}
          >
            <SearchIcon />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: "10px" }}
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="search__data-container content">
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
                media_type={type ? "tv" : "movie"}
                vote_average={item.vote_average}
              />
            );
          })}
        {searchText &&
          content.length < 1 &&
          (type ? <h2>No Series found</h2> : <h2>No Movies found</h2>)}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Search;
