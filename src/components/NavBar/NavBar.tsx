import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 5, boxShadow: 10 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              color="inherit"
              to="/"
              variant="h5"
              component={NavLink}
              sx={{ flexGrow: 1, textDecoration: "none", fontSize: "18px" }}
            >
              Contacts
            </Typography>
            <Button color="inherit" to="/new-contact" component={NavLink}>
              Add new contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
