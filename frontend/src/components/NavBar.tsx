import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { MyHeader, LinkText } from "./style/Navbar";
import { isLogin, isAdmin } from "../utils/auth";

const ResponsiveAppBar = ({ socket }: any) => {
  const [isadmin, setIsAdmin] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const admin = isAdmin();
    setIsAdmin(admin);
  }, [location]);

  React.useEffect(() => {
    socket?.on("getNotification", (data: any) => {
      console.log("Notified Data", data);
      setNotifications((prev): any => [...prev, data]);
    });
  }, [socket]);

  let pages;
  if (isadmin) {
    pages = [
      ["Home", "/home"],
      ["My Profile", "/myprofile"],

      ["Projects", "/projects"],
      ["Profiles", "/profiles"],
      ["Leave Requests", "/allLeaveRequest"],
      ["Send Notice", "/noticeboard"],
      ["Notice Board", "/showNoticeBoard"],
    ];
  } else {
    pages = [
      ["Home", "/home"],
      ["My Profile", "/myprofile"],
      ["Projects", "/projects"],
      ["Notice Board", "/showNoticeBoard"],
    ];
  }

  const settings = ["Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState<
    null | HTMLElement | any
  >(null);
  const [anchorElUser, setAnchorElUser] = React.useState<
    null | HTMLElement | any
  >(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement | any>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement | any>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  if (["/"].includes(location.pathname)) return null;
  return (
    <AppBar position="static">
      <MyHeader>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={page[1]}> {page[0]}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page[0]} onClick={handleCloseNavMenu}>
                  <Link to={page[1]} style={{ textDecoration: "none" }}>
                    {" "}
                    <LinkText>{page[0]}</LinkText>
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ m: 2 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon onClick={() => setOpen(!open)} />
                </Badge>
              </IconButton>
            </Box>
            <br />
            {open && (
              <>
                <Box
                  sx={{
                    bgcolor: "gray",
                  }}
                >
                  {notifications?.map((notification: any) => (
                    <MenuItem>{notification.action} </MenuItem>
                  ))}
                </Box>
              </>
            )}

            {isLogin() ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      {/* <Typography textAlign="center">{setting}</Typography> */}
                      <Button variant="contained" onClick={handleLogout}>
                        LogOut
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </MyHeader>
    </AppBar>
  );
};
export default ResponsiveAppBar;
