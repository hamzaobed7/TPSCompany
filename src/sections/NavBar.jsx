import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import logo from "../images/logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import Tooltip from "@mui/material/Tooltip";
const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "var(--color-crude-dark, #0b0f19)",
        height: "100%",
        color: "#fff",
        px: 3,
        py: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box component="img" src={logo} alt="TPS Logo" sx={{ height: 45, width: "auto" }} />
        <IconButton sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{
                textAlign: "center",
                borderRadius: "8px",
                mb: 1,
                "&:hover": {
                  backgroundColor: "rgba(245, 158, 11, 0.1)",
                  color: "var(--color-fuel-amber, #f59e0b)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: "medium",
                  fontSize: "1.1rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        fullWidth
        component="a"
        href="#contact-us"
        sx={{
          mt: 3,
          backgroundColor: "var(--color-fuel-amber, #f59e0b)",
          color: "#000",
          fontWeight: "bold",
          borderRadius: "8px",
          py: 1.2,
          "&:hover": {
            backgroundColor: "#d97706",
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          // : scrolled ? "rgba(11, 15, 25, 0.95)" : "transparent",
          // backdropFilter: scrolled ? "blur(10px)" : "none",
          backgroundColor:"var(--color-petroleum-deep)",
          borderBottom: scrolled ? "1px solid rgba(245, 158, 11, 0.15)" : "1px solid transparent",
          transition: "all 0.3s ease-in-out",
          height: "100px",
          width:{xs:'90%',md:"60%"},
          margin:"20px auto",
          position:"fixed",
          right:{xs:"30px",md:"400px"},
          borderRadius:"20px"
        }}
      >
        <Container maxWidth="xl" sx={{marginTop:'10px'}}   >
          <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1, alignItems:"center" }}>
            <Box
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="TPS Logo"
                sx={{
                  height: { xs: 38, md: 45 },
                  width: "auto",
                  objectFit: "contain",
                  mr: 1.5,
                }}
              />
            </Box>

            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: "#ffffff",
                    px: 2,
                    py: 1,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    textTransform: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "var(--color-fuel-amber, #f59e0b)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                component="a"
                href="#contact-us"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  backgroundColor: "var(--color-fuel-amber, #f59e0b)",
                  color: "#000000",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 14px rgba(245, 158, 11, 0.3)",
                  "&:hover": {
                    backgroundColor: "#d97706",
                    boxShadow: "0 6px 20px rgba(245, 158, 11, 0.5)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>
            <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#ffffff" }}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton>
              <Tooltip title="languages" >
                <LanguageIcon sx={{color:'white'}} />
              </Tooltip>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "var(--color-crude-dark, #0b0f19)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
