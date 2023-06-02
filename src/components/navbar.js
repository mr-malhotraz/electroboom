import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {
  AccountCircle,
  Home,
  LocalMall,
  LocalOffer,
} from "@mui/icons-material";
import { Inventory } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

// import { ButtonBase } from "@mui/material";

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact", <ShoppingCartIcon />];
const navItems = [
  {
    label: (
      <Button variant="text" startIcon={<Home />} sx={{ color: "white" }}>
        Home
      </Button>
    ),
    path: "/",
  },
  {
    label: (
      <Button variant="text" startIcon={<LocalOffer />} sx={{ color: "white" }}>
        Offers
      </Button>
    ),
    path: "/offers",
  },
  {
    label: (
      <Button variant="text" startIcon={<LocalMall />} sx={{ color: "white" }}>
        Shop
      </Button>
    ),
    path: "/Product",
  },
  {
    label: (
      <Button
        variant="text"
        startIcon={<AccountCircle />}
        sx={{ color: "white" }}
      >
        Login
      </Button>
    ),
    path: "/login",
  },

  {
    label: (
      <Button variant="text" startIcon={<Inventory />} sx={{ color: "white" }}>
        Api
      </Button>
    ),
    path: "/api",
  },
];

const theme = createTheme();

theme.typography.h5 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

function Navbar(props) {
  const { window } = props;
  const items = useSelector((state) => state.cart);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Account Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className="drawer"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "60px" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src="images/logo.png" className="logo-img" />
        ℮lectroβoom
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            sx={{ justifyContent: "center" }}
            key={item.label}
            disablePadding
          >
            <Link
              style={{
                color: "black",
                textDecoration: "inherit",
                textAlign: "center",
              }}
              to={item.path}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: "center" }} key={"cart"} disablePadding>
          <Link
            style={{
              color: "black",

              textDecoration: "inherit",
              textAlign: "center",
            }}
            to={"/shoppingcart"}
          ></Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "black",
          zIndex: 1100,
        }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <ThemeProvider theme={theme}>
            <img src="images/logo.png" className="logo-img" />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                display: { xs: "", sm: "block" },
              }}
            >
              ℮lectroβoom
            </Typography>

            <Button key={"cart.label"} disablePadding>
              <Link style={{ color: "white" }} to={"/shoppingcart"}>
                {
                  <Button
                    variant="text"
                    sx={{
                      display: { md: "none", sm: "none", lg: "none" },
                      paddingLeft: "50px",
                    }}
                    startIcon={
                      <Badge badgeContent={items.length} color="primary">
                        <ShoppingCartIcon sx={{ color: "white" }} />
                      </Badge>
                    }
                  ></Button>
                }
              </Link>
            </Button>
          </ThemeProvider>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className="navv" key={item.label} disablePadding>
                <Link className="aa" to={item.path}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button key={"cart.label"} disablePadding>
              <Link
                sx={{
                  color: "white",
                }}
                to={"/shoppingcart"}
              >
                {
                  <Button
                    variant="text"
                    startIcon={
                      <Badge badgeContent={items.length} color="primary">
                        <ShoppingCartIcon sx={{ color: "white" }} />
                      </Badge>
                    }
                  ></Button>
                }
              </Link>
            </Button>
            <Button>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 2.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                // transformOrigin={{ horizontal: "right", vertical: "top" }}
                // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
