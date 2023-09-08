import React from "react";
import { useContext } from "react";

import {
  Box,
  IconButton,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import logo from "../assets/logo.png";
import { tokens, ColorModeContext } from "../theme";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const appBarStyles = {
    backgroundColor: colors.primary[400], // Use the primary color from your provided color scheme
  };

  const buttonStyles = {
    color: colors.primary[100], // Use the primary color for button text
  };

  const mobileMenuButtonStyles = {
    color: colors.primary[100], // Use the primary color for the mobile menu button
  };

  const listItemTextStyles = {
    color: colors.primary[100], // Use the primary color for the list item text
  };

  // State to control mobile drawer
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Function to toggle mobile drawer
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar
      position="static"
      style={appBarStyles}
      backgroundColor={colors.primary[400]}
    >
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" height="40" />
        </Typography>

        {/* Desktop Menu */}
        <Box
          display={{ xs: "none", sm: "flex" }} // Hide on extra-small screens
          alignItems="center"
        >
          <Button style={buttonStyles}>Projects</Button>
          <Button style={buttonStyles}>Developers</Button>
          <Button style={buttonStyles}>About</Button>
          <Button style={buttonStyles}>Contact Us</Button>
        </Box>
        {/* Light/Dark Mode Toggle */}
        <IconButton
          onClick={colorMode.toggleColorMode}
          color={colors.primary[100]}
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        {/* Mobile Menu Toggle (On the Right) */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileMenu}
          sx={{ display: { sm: "none", xs: "block" } }} // Hide on small screens
          style={mobileMenuButtonStyles}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <List>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="Projects" style={listItemTextStyles} />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="Developers" style={listItemTextStyles} />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText
              primary="About"
              color={colors.blueAccent[500]}
              style={listItemTextStyles}
            />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText
              // color="yellow !important"
              primary="Contact Us"
              style={listItemTextStyles}
            />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
