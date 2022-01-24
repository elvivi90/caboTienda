import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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



const SearchBarComponent = ({data, dataSearched, nullField}) => {

  const requestSearch = (searchedVal) => {
    if (searchedVal === ""){
      return nullField();
    }
    const filteredRows = [];
    for (let i = 0; i < data.length; i++) {
      const currentPosition = Object.values(data[i]);
      const finded = currentPosition.filter((obj) =>
        obj.toString().toLowerCase().includes(searchedVal.toLowerCase())
      );

      if (finded.length > 0) {
        filteredRows.push(data[i]);
      }
    }
    dataSearched(filteredRows);
  };
  return (
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
  );
};

export default SearchBarComponent;
