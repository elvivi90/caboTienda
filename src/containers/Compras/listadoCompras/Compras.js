import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import fireDB from "../../../firebaseConfig/firebaseConfig";
import { ref, onValue } from "firebase/database";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

import "./Compras.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "date",
    headerName: "Fecha",
    width: 130,
    description: "Descripcion del producto",
  },
  { field: "description", headerName: "Descripcion", width: 200 },
  { field: "total", headerName: "Total", width: 70 }
];

const Compras = (props) => {

  // const [searched, setSearched] = useState();
  const [data, setData] = useState({});
  let navigate = useNavigate();

  const clickHandler = () => {
    navigate("/compras/nueva-compra");
  }

  useEffect(() => {
    const dbRef = ref(fireDB, "compras/");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      // reemplazar por Objects.entries(key, values)
      const LoadData = Object.values(data);
      setData(LoadData);
    });
  }, []);

  return (
    <div className="main">
      <div className="purchase-button">
        <Button variant="outlined" onClick={clickHandler} >+ Nueva compra</Button>
      </div>
      <div style={{ height: 400, width: "60%", marginTop: "5vh" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Compras;
