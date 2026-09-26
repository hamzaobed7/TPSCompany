import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Zoom from "@mui/material/Zoom";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 20, sm: 30 },
          right: { xs: 20, sm: 30 },
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={scrollToTop}
          aria-label="scroll to top"
          sx={{
            width: "50px",
            height: "50px",
            backgroundColor: "var(--color-fuel-amber, #f59e0b)",
            color: "#ffff",
            boxShadow: "0 4px 20px rgba(245, 158, 11, 0.4)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#d97706",
              transform: "translateY(-4px)",
              boxShadow: "0 6px 25px rgba(245, 158, 11, 0.6)",
            },
          }}
        >
          <ExpandLessIcon sx={{ fontSize: "32px" }} />
        </IconButton>
      </Box>
    </Zoom>
  );
}
