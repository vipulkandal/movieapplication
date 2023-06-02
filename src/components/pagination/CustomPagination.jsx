import { ThemeProvider } from "@emotion/react";
import { Pagination } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

function CustomPagination({ setPage, numberOfPages = 10 }) {
  // Implementing custom theme; Can be light or dark
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "10px",
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <Pagination
          count={numberOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)} // e.target.textContent has the page number selected
          hideNextButton
          hidePrevButton
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
