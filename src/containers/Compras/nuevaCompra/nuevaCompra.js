import React, { useState, useEffect } from "react";
import SearchBarComponent from "../../../components/Common/SearchBar/searchBar";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import fireDB from "../../../firebaseConfig/firebaseConfig";
import { ref, onValue } from "firebase/database";
import './nuevaCompra.css'


const NuevaCompra = () => {
  const [data, setData] = useState({});
  const [filteredValues, setFilteredValues] = useState();
  const [listItems, setListItems] = useState([]);

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
    if (searchedData.length === data.length){
      setFilteredValues(null);
    }
    setFilteredValues(searchedData);
  };

  const nullHandler = () => {
    console.log("dame")
    setFilteredValues(null);
  }

  useEffect(() => {
    console.log(filteredValues);
    
  }, [filteredValues]);

  return (
    <div className="main">
      <SearchBarComponent data={data} dataSearched={dataSearchedHandler} nullField={nullHandler}/>
      {filteredValues ? (
        <div className="searched-list">
          <ul>
            {filteredValues.map((item) => (
              <li key={item.id}>
                {item.nombre} {item.color}
                <Button
                  onClick={() => {
                    setFilteredValues(null);
                    setListItems([...listItems, item]);
                  }}
                  startIcon={<AddCircleIcon color="success" />}
                ></Button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div>
        <ul>
          <div>
            {listItems.map((item) => (
              <li>
                {item.nombre} {item.color}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  ); 
};

export default NuevaCompra;
