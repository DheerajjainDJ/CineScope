import React from "react";
import { Box, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomPagination = ({ type, page, totalPage }) => {
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    console.log(value);
    window.scroll(0, 0);
    if (value === 1) {
      return navigate("/movies");
    }
    navigate(`/${type}/${value}`);
  };

  // const handlePageChange = (event, value) => {
  //   window.scroll(0, 0);
  //   navigate(`/${type}/${value}`);
  // };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 5,
      }}
    >
      <Pagination
        count={totalPage}
        defaultPage={1}
        page={Number(page)}
        shape="rounded"
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.85rem",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(255,222,0,0.1)",
              borderColor: "rgba(255,222,0,0.4)",
              color: "#FFDE00",
            },
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#FFDE00",
            borderColor: "#FFDE00",
            color: "#000",
            fontWeight: 800,
            boxShadow: "0 0 16px rgba(255,222,0,0.4)",
            "&:hover": {
              backgroundColor: "#ffe833",
              color: "#000",
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
            color: "rgba(255,255,255,0.3)",
          },
        }}
      />
    </Box>
  );
};

export default React.memo(CustomPagination);
