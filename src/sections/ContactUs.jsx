import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contact-us"
      component="section"
      sx={{
        width: "100%",
        paddingBottom:'60px',
        maxWidth: {xs:'400px',md:"1450px"},
        boxSizing: "border-box",
        position: "relative",
        top: {xs:"900px",md:"340px"},
        left:{xs:"40px",md:"340px"} ,
        clear: "both",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "var(--color-fuel-amber)",
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.5rem" },
          mb: 1,
        }}
      >
        Contact Us
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "var(--color-slate-metal)",
          mb: 6,
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        Have questions or need technical support? Get in touch with our team of experts.
      </Typography>
      <Box
        sx={{
          backgroundColor: "var(--color-petroleum-deep)",
          borderRadius: "20px",
          border: "1px solid rgba(245, 158, 11, 0.15)",
          p: { xs: 2.5, sm: 4, md: 5 },
          boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.4)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.3rem", sm: "1.6rem" },
              }}
            >
              Direct Channels
            </Typography>

            <Stack spacing={2.5}>
              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
                sx={{
                  p: 2.5,
                  backgroundColor: "var(--color-crude-dark)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "var(--color-fuel-amber)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-fuel-amber)",
                    color: "#ffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  <LocalPhoneIcon sx={{ fontSize: "28px" }} />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography variant="caption" sx={{ color: "var(--color-slate-metal)", display: "block" }}>
                    Phone Call
                  </Typography>
                  <Typography
                    component="a"
                    href="tel:+963965656631"
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      fontWeight: "bold",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "var(--color-fuel-amber)" },
                    }}
                  >
                    +963 965 656 631
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
                sx={{
                  p: 2.5,
                  backgroundColor: "var(--color-crude-dark)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#25D366",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid #25D366",
                    color: "#25D366",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 15px rgba(37, 211, 102, 0.2)",
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography variant="caption" sx={{ color: "var(--color-slate-metal)", display: "block" }}>
                    WhatsApp Chat
                  </Typography>
                  <Typography
                    component="a"
                    href="https://wa.me/963965656631"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      fontWeight: "bold",
                      color: "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "#25D366" },
                    }}
                  >
                    +963 965 656 631
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
                sx={{
                  p: 2.5,
                  backgroundColor: "var(--color-crude-dark)",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "var(--color-fuel-amber)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-fuel-amber)",
                    color: "#ffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)",
                  }}
                >
                  <EmailIcon sx={{ fontSize: "28px" }} />
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography variant="caption" sx={{ color: "var(--color-slate-metal)", display: "block" }}>
                    Official Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:Info@TPS-STATIONS.COM"
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.15rem" },
                      fontWeight: "bold",
                      color: "#ffffff",
                      textDecoration: "none",
                      wordBreak: "break-all",
                      transition: "color 0.2s ease",
                      "&:hover": { color: "var(--color-fuel-amber)" },
                    }}
                  >
                    Info@TPS-STATIONS.COM
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* العمود الثاني: فورم المراسلة */}
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "var(--color-crude-dark)",
                p: { xs: 3, sm: 4 },
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                height: "100%",
                width:'100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: { xs: "1.3rem", sm: "1.6rem" },
                }}
              >
                Send Us a Message
              </Typography>

              <Stack spacing={2.5}>
                <TextField required fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" sx={customTextFieldStyle} />

                <TextField required fullWidth type="email" label="Email Address" name="email" value={formData.email} onChange={handleChange} variant="outlined" sx={customTextFieldStyle} />

                <TextField required fullWidth multiline rows={4} label="Your Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" sx={customTextFieldStyle} />

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.6,
                    mt: 1,
                    backgroundColor: "var(--color-fuel-amber)",
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    borderRadius: "10px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#d97706",
                      boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const customTextFieldStyle = {
  "& .MuiInputLabel-root": {
    color: "var(--color-slate-metal)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--color-fuel-amber)",
  },
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
    width:{xs:"300px",md:"900px"},
    backgroundColor: "rgba(11, 15, 25, 0.6)",
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.15)",
    },
    "&:hover fieldset": {
      borderColor: "var(--color-fuel-amber)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--color-fuel-amber)",
      borderWidth: "1.5px",
    },
  },
};
