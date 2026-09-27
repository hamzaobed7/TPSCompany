import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "motion/react";
import photo1 from "../images/home9.jpg";

export default function AboutUs() {
  return (
    <>
      <Box
      id="about-us"
        sx={{
          position: "relative",
          minHeight: "500px",
          width: "100%",
          backgroundImage: `linear-gradient(180deg, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.7) 50%, rgba(11, 15, 25, 0.9) 100%), url(${photo1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          top: { xs: "750px", md: "300px" },
         
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          spacing={3}
          sx={{
            maxWidth: "900px",
            width: "90%",
            textAlign: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "var(--color-fuel-amber)",
              letterSpacing: 3,
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            ABOUT TPS COMPANY
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            TPS Company
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "var(--color-slate-metal)",
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              lineHeight: 1.8,
              maxWidth: "780px",
            }}
          >
            We specialize in fuel infrastructure solutions where we provide comprehensive services including design, construction, maintenance, and development of fuel stations and storage facilities.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              backgroundColor: "var(--color-fuel-amber)",
              color: "#000000",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#d97706",
                boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact us
          </Button>
        </Stack>
      </Box>
    </>
  );
}
