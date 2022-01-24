import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Stock.css";
import fireDB from "../../firebaseConfig/firebaseConfig";
import { ref, onValue } from "firebase/database";
import SearchBarComponent from "../../components/Common/SearchBar/searchBar";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 130,
    description: "Descripcion del producto",
  },
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

  { field: "precio compra", headerName: "Valor Compra", width: 130 },
];

const Stock = (props) => {
  const [searched, setSearched] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    const dbRef = ref(fireDB, "stock/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      // reemplazar por Objects.entries(key, values)
      const LoadData = Object.values(data);
      setData(LoadData);
    });
  }, []);

  const dataSearchedHandler = (searchedData) => {
    setSearched(searchedData);
  };

  const nullHandler = () => {
    setSearched(data);
  }

  return (
    <div className="main">
      <SearchBarComponent
        data={data}
        dataSearched={dataSearchedHandler}
        nullField={nullHandler}
      />
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
