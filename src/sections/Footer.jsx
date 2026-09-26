import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--color-crude-dark, #0b0f19)",
        color: "#ffffff",
        pt: { xs: 6, md: 8 },
        pb: 4,
        mt: 8,
        borderTop: "1px solid rgba(245, 158, 11, 0.2)",
        position: "relative",
        top:{xs:900,md:500},
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "var(--color-fuel-amber, #f59e0b)",
                mb: 2,
                letterSpacing: "1px",
              }}
            >
              TPS STATIONS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "var(--color-slate-metal, #94a3b8)",
                lineHeight: 1.7,
                mb: 3,
                maxWidth: "340px",
              }}
            >
              Providing high-quality petroleum and energy solutions. Contact our experts for specialized technical support and reliable services.
            </Typography>

            {/* أيقونات وسائل التواصل الاجتماعي */}
            <Stack direction="row" spacing={1.5}>
              {[
                { icon: <FacebookIcon />, href: "#" },
                { icon: <LinkedInIcon />, href: "#" },
                { icon: <WhatsAppIcon />, href: "https://wa.me/963965656631" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "var(--color-fuel-amber, #f59e0b)",
                      borderColor: "var(--color-fuel-amber, #f59e0b)",
                      transform: "translateY(-3px)",
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  backgroundColor: "var(--color-fuel-amber, #f59e0b)",
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about-us" },
                { label: "Services", href: "#services" },
                { label: "Contact Us", href: "#contact-us" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: "var(--color-slate-metal, #94a3b8)",
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      color: "var(--color-fuel-amber, #f59e0b)",
                      paddingLeft: "4px",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* القسم الثالث: الخدمات */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  backgroundColor: "var(--color-fuel-amber, #f59e0b)",
                },
              }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {["Fuel Stations", "Technical Support", "Petroleum Logistics", "Maintenance"].map((service, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{
                    color: "var(--color-slate-metal, #94a3b8)",
                    fontSize: "0.95rem",
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                mb: 2.5,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-6px",
                  left: 0,
                  width: "30px",
                  height: "2px",
                  backgroundColor: "var(--color-fuel-amber, #f59e0b)",
                },
              }}
            >
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocalPhoneIcon
                  sx={{
                    color: "var(--color-fuel-amber, #f59e0b)",
                    fontSize: "20px",
                  }}
                />
                <Link
                  href="tel:+963965656631"
                  underline="none"
                  sx={{
                    color: "var(--color-slate-metal, #94a3b8)",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  +963 965 656 631
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon
                  sx={{
                    color: "var(--color-fuel-amber, #f59e0b)",
                    fontSize: "20px",
                  }}
                />
                <Link
                  href="mailto:Info@TPS-STATIONS.COM"
                  underline="none"
                  sx={{
                    color: "var(--color-slate-metal, #94a3b8)",
                    fontSize: "0.9rem",
                    wordBreak: "break-all",
                    "&:hover": { color: "#ffffff" },
                  }}
                >
                  Info@TPS-STATIONS.COM
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon
                  sx={{
                    color: "var(--color-fuel-amber, #f59e0b)",
                    fontSize: "20px",
                    mt: "2px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--color-slate-metal, #94a3b8)",
                    fontSize: "0.9rem",
                  }}
                >
                  Damascus, Syria
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255, 255, 255, 0.08)",
            my: 4,
          }}
        />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography
            variant="body2"
            sx={{
              color: "var(--color-slate-metal, #94a3b8)",
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} TPS Stations. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "var(--color-slate-metal, #94a3b8)",
                fontSize: "0.85rem",
                "&:hover": { color: "var(--color-fuel-amber, #f59e0b)" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "var(--color-slate-metal, #94a3b8)",
                fontSize: "0.85rem",
                "&:hover": { color: "var(--color-fuel-amber, #f59e0b)" },
              }}
            >
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
