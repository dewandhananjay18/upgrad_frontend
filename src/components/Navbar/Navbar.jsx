import React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  palette: {
    logout: {
      main: "#f50157",
      darker: "#053e85",
    },
    menu: {
      main: "#4050b5",
      contrastText: "#fff",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
    width: "auto",
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
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const Navbar = () => {
  const userLoggedIn = true; // Replace with your logic to check if user is logged in
  const userIsAdmin = true; // Replace with your logic to check if user is an admin

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="menu">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <ShoppingCart />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              upGrad Eshop
            </Typography>
            {!userLoggedIn && (
              <div className="align-right">
                <Button color="inherit" component={Link} to="/login">
                  Log In
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Sign Up
                </Button>
              </div>
            )}
            {userLoggedIn && !userIsAdmin && (
              <>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Button color="inherit" component={Link} to="/AddProduct">
                  Add Products
                </Button>
              </>
            )}
            {userLoggedIn && userIsAdmin && (
              <>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                {userLoggedIn && (
                  <Button color="inherit" component={Link} to="/ProductPage">
                    Home
                  </Button>
                )}
                {!userLoggedIn && (
                  <Button color="inherit" component={Link} to="/Login">
                    Home
                  </Button>
                )}
                <Button color="inherit" component={Link} to="/AddProduct">
                  Add Products
                </Button>
              </>
            )}
            {userLoggedIn && (
              <>
                <ThemeProvider theme={theme}>
                  <Button
                    color="logout"
                    variant="contained"
                    component={Link}
                    to="/Login"
                  >
                    Log Out
                  </Button>
                </ThemeProvider>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default Navbar;
