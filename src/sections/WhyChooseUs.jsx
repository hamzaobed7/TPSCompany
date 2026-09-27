import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import { motion } from "motion/react";

const features = [
  {
    icon: <AccessTimeFilledIcon sx={{ fontSize: "38px" }} />,
    title: "24/7 Rapid Response",
    description: "24/7 rapid response to all requests and emergencies, ensuring operational continuity without interruption.",
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: "38px" }} />,
    title: "International Safety Standards",
    description: "Strict implementation according to international safety, environmental, and precision engineering standards.",
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: "38px" }} />,
    title: "Station Automation Systems",
    description: "Providing and installing advanced automation systems for remote control of multiple stations from a unified control center.",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: "38px" }} />,
    title: "Expert Consultations",
    description: "Free consultations from specialized experts tailored specifically to customer needs for stations and fuel distribution systems.",
  },
  {
    icon: <HighQualityIcon sx={{ fontSize: "38px" }} />,
    title: "Certified Equipment & Warranties",
    description: "Providing the latest high-efficiency petroleum equipment and accessories with comprehensive warranties ranging from 1 to 5 years.",
  },
  {
    icon: <HighQualityIcon sx={{ fontSize: "38px" }} />,
    title: "Certified Equipment & Warranties",
    description: "Providing the latest high-efficiency petroleum equipment and accessories with comprehensive warranties ranging from 1 to 5 years.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ width: { xs: "79%", md: "90%" }, maxWidth: { xs: "350px", md: "1300px" }, position: "relative", top: { md: "350px", xs: "780px" }, left: { md: "20%", xs: "13px" }, padding: "30px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "var(--color-fuel-amber)",
          fontWeight: "bold",
          mb: 1,
          fontSize: { xs: "2rem", sm: "2.5rem" },
        }}
      >
        Why Choose TPS?
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
        Delivering excellence and safety across petroleum infrastructure with industry-grade reliability.
      </Typography>
      <Grid container spacing={10}>
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeInOut",
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              sx={{
                height: "100%",
                width: { xs: "100%", md: "350px" },
                backgroundColor: "var(--color-petroleum-deep)",
                border: "1px solid rgba(245, 158, 11, 0.18)",
                borderRadius: "14px",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  borderColor: "var(--color-fuel-amber)",
                  boxShadow: "0px 10px 30px rgba(245, 158, 11, 0.2)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-crude-dark)",
                    border: "2px solid var(--color-fuel-amber)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "var(--color-fuel-amber)",
                    mb: 2.5,
                    boxShadow: "0px 0px 20px rgba(245, 158, 11, 0.25)",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    mb: 1.5,
                    fontSize: "1.1rem",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--color-slate-metal)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
