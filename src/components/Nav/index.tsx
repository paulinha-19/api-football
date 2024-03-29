import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../context/Auth/useAuth";

const drawerWidth = 240;
const navItems = ["home", "dados", "perfil"];

const Nav = () => {
  const auth = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MEU TIME
      </Typography>
      <Divider />
      {!!auth.user && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <List>
            {navItems.map((navItem) => (
              <ListItem key={navItem} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <Link
                    to={`/${navItem}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {navItem}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            key={"logout"}
            onClick={auth.logout}
            sx={{ display: "flex", mx: 1, color: "primary.contrastText" }}
          >
            {"logout"}
          </Button>
        </Box>
      )}
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MEU TIME
          </Typography>
          {!!auth.user && (
            <Box className="BOX" sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((navItem) => (
                <Button key={navItem} sx={{ color: "#fff" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#fff" }}
                    to={`/${navItem}`}
                  >
                    {navItem}
                  </Link>
                </Button>
              ))}
              <Button
                key={"logout"}
                onClick={auth.logout}
                sx={{ my: 2, color: "white" }}
              >
                {"logout"}
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
