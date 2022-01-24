import React from "react";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import Ventas from "./containers/Ventas/Ventas";
import Stock from "./containers/Stock/Stock";
import Clientes from "./containers/Clientes/Clientes";
import Compras from "./containers/Compras/listadoCompras/Compras";
import NuevaCompra from "./containers/Compras/nuevaCompra/nuevaCompra";
import Balance from "./containers/Balances/Balance";

const App = (props) => {
    return (
      <React.Fragment>
        <Navigation />
        <Routes>
          <Route path="/" element={<Ventas />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/compras/nueva-compra" element={<NuevaCompra />} />
        </Routes>
      </React.Fragment>
    );
};

export default App;
