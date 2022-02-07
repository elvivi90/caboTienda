import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import "./Purchase.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PurchaseTable = ({ items, setListItems }) => {
  const [grandTotal, setTotal] = useState(0);

  const addHandler = (id) => {
    const newList = items.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: item.cantidad + 1 };
      }
      return item;
    });
    setListItems(newList);
  };

  const subtractHandler = (id, cantidad) => {
    if (cantidad >= 1) {
      const newList = items.map((item) => {
        if (item.id === id) {
          return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
      });
      setListItems(newList);
    }
    if (cantidad <= 1) {
      const auxArray = items.filter((item) => item.id !== id);
      setListItems(auxArray);
    }
  };

  console.log(grandTotal);

  useEffect(() => {
    let total = [];
    total = items.map((item) => item.precio_compra * item.cantidad);
    const t = total.reduce((a, b) => a + b);
    setTotal(t);
  }, [grandTotal, items]);

  return (
    <div>
      {items ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Descripcion</StyledTableCell>
                <StyledTableCell align="center">Cantidad</StyledTableCell>
                <StyledTableCell align="center">
                  Precio unitario
                </StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row) => (
                <StyledTableRow key={row.nombre}>
                  <StyledTableCell component="th" scope="row">
                    {row.nombre}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.cantidad}
                    <Button
                      onClick={() => {
                        addHandler(row.id);
                      }}
                      startIcon={<AddCircleIcon color="success" />}
                    ></Button>
                    <Button
                      onClick={() => {
                        subtractHandler(row.id, row.cantidad);
                      }}
                      startIcon={<RemoveCircleIcon color="error" />}
                    ></Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.precio_compra}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.cantidad * row.precio_compra}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row" />
                <StyledTableCell component="th" scope="row" />
                <StyledTableCell component="th" scope="row">
                  TOTAL
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {grandTotal}
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
};

export default PurchaseTable;