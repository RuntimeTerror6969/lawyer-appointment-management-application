import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "All Appointments", path: "/appointments" },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => navigate(item.path)}
            sx={{ marginBottom: 1 }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="subtitle1" sx={{ marginBottom: 1, paddingLeft: 2 }}>
        Account
      </Typography>
      <List>
        {["Profile", "Settings", "Logout"].map((text, index) => (
          <ListItem button key={index} sx={{ marginBottom: 1 }}>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#111111",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar sx={{ padding: 0, justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Lawyer Appointments
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/appointments")}>
              All Appointments
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
