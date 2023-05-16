import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function EditProduct() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box>
          <Container component="main" maxWidth="xs">
            <Typography variant="h5" sx={{ marginTop: 5 }} align="center">
              Add Procuct
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: "block",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                required
                id="Name"
                name="Name"
                label="Name"
                fullWidth
                autoComplete="product-name"
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <FormControl
                fullWidth
                sx={{
                  marginTop: 2,
                }}
              >
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  color="menu"
                >
                  Select Address
                </InputLabel>
                <Select
                  defaultValue={"Default"}
                  inputProps={{
                    name: "Default",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={"Electronics"}>Electronics</option>
                  <option value={"PersonalCare"}>Personal Care</option>
                  <option value={"Apparels"}>Apparels</option>
                </Select>
              </FormControl>
              <TextField
                required
                id="Manufacturer"
                name="Manufacturer"
                label="Manufacturer"
                fullWidth
                autoComplete="Manufacturer"
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <TextField
                required
                id="Available item"
                name="AvailableItem"
                label="Available item"
                fullWidth
                autoComplete="AvailableItem"
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <TextField
                required
                id="Price"
                name="Price"
                label="Price"
                fullWidth
                autoComplete="Price"
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <TextField
                id="Image Url"
                name="Image Url"
                label="Image Url"
                fullWidth
                autoComplete="Image Url"
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <TextField
                id="description"
                name="Description"
                label="Description"
                fullWidth
                variant="outlined"
                color="menu"
                sx={{
                  marginTop: 2,
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="menu"
                onClick={handleClick({
                  vertical: "top",
                  horizontal: "right",
                })}
                sx={{ mt: 3, mb: 2 }}
              >
                Add Product
              </Button>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Product Added Successfully!
                </Alert>
              </Snackbar>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Container>
  );
}
