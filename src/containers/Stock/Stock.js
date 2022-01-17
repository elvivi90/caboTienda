import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";
import "./Stock.css";
import fireDB from "../../firebaseConfig/firebaseConfig";
import { ref, onValue } from "firebase/database";

const SearchBar = styled("div")(({ theme }) => ({
  border: "1px solid",
  marginTop: "5vh",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "60%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100vw",
      "&:focus": {
        width: "100vwch",
      },
    },
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 130,
    description: "Descripcion del producto",
  },
  { field: "precio compra", headerName: "Valor Compra", width: 130 },
  { field: "color", headerName: "Color", width: 130 },
  { field: "talle", headerName: "Talle", width: 70 },
  {
    field: "cantidad",
    headerName: "Cantidad",
    type: "number",
    sortable: false,
    width: 90,
    // valueGetter: (params) =>
    //     `${params.getValue(params.id, "firstName") || ""} ${params.getValue(
    //         params.id,
    //         "lastName"
    //     ) || ""}`,
  },
];

const Stock = (props) => {
  const [searched, setSearched] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = ref(fireDB, "stock/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const LoadData = Object.values(data);
      setData(LoadData);
    });
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = [];
    for (let i = 0; i < data.length; i++) {
      const currentPosition = Object.values(data[i]);
      const finded = currentPosition.filter((obj) =>
        obj
          .toString()
          .toLowerCase()
          .includes(searchedVal.toLowerCase())
      );

      if (finded.length > 0) {
        filteredRows.push(data[i]);
      }
    }
    setSearched(filteredRows);
  };
  return (
    <div className="main">
      <SearchBar>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar producto..."
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => requestSearch(e.target.value)}
        />
      </SearchBar>
      <div style={{ height: 400, width: "60%", marginTop: "5vh" }}>
        <DataGrid
          rows={searched || data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Stock;
