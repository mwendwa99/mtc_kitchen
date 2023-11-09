import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../assets/svg/logo-small.svg";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import instagram from "../assets/icons/instagram.png";

const pages = ["Shop", "Plan my kitchen", "About us", "Gallery", "My Orders"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ p: 2 }}>
      <Container maxWidth="lg" sx={{ borderBottom: "#cccc 1px solid" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Stack direction="row" spacing={2}>
              <img
                style={{ width: "30px", height: "30px" }}
                src={facebook}
                alt="facebook"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src={twitter}
                alt="twitter"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src={instagram}
                alt="instagram"
              />
            </Stack>
            {pages.slice(0, 2).map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", fontSize: ".6rem" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "#000" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.slice(2, 4).map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", fontSize: ".6rem" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            onClick={handleCloseNavMenu}
            sx={{ display: "flex", fontSize: ".6rem" }}
            variant="outlined"
            endIcon={<ShoppingCartIcon />}
          >
            My orders
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
