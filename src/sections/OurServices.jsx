import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ser1 from "../images/ser.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { easeInOut, motion } from "motion/react";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
const data = [
  {
    sumr: " Fuel Supply & Logistics",
    disrption: "Comprehensive bulk fuel transport and station replenishment services across all active coverage zones.",
  },
  {
    sumr: " Engineering Studies & Gas Station Construction",
    disrption: "Building gas stations and storage facilities according to international quality and safety standerd. ",
  },
  {
    sumr: " Station and Storage Development",
    disrption: "Capacity expansion, pump power increase, and smart monitoring solutions.",
  },
];
const service = [
  { icon: <BuildIcon sx={{ fontSize: "40px" }} />, title: "Implementing civil and metallic works" },
  { icon: <SettingsIcon sx={{ fontSize: "40px" }} />, title: "Periodic maintenance for pumps and tanks" },
  { icon: <ElectricalServicesIcon sx={{ fontSize: "40px" }} />, title: "Electrical works" },
];
export default function OurServices() {
  return (
    <Stack id="services" direction={"column"} sx={{ width: {xs:'87%',md:"100%"}, height: "650px" }}>
      <Typography variant="h2" sx={{ textAlign: "center", color: "var(--color-fuel-amber)", margin:"30px auto", fontWeight: "bold" }}>
        Our Services
      </Typography>

      <Grid container spacing={2} sx={{margin:'10px auto',position:"relative",left:"20px"}}    >
        <Grid item xs={12} sm={6} md={6}>
          <Box
            component="img"
            src={ser1}
            alt="Services"
            sx={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
            {data.map((e, index) => {
              return (
                <Accordion
                  key={index}
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: easeInOut }}
                  sx={{
                    width: "100%",
                    backgroundColor: "#111827",
                    color: "#fff",
                    border: "1px solid #1e293b",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-fuel-amber)" }} />}>
                    <Typography component="span" sx={{ fontWeight: "bold", color: "var(--color-fuel-amber)", fontSize: "20px" }}>
                      {e.sumr}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: "#cbd5e1" }}>{e.disrption}</AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position:'relative',
          left:{xs:"20px",md:'0'}
        }}
      >
        {service.map((e, index) => {
          return (
            <Card
              component={motion.div}
              initial={{ opacity: 0.3, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              key={index}
              sx={{
                width: { xs: "90%", md: "30%" },
                minHeight: "220px",
                backgroundColor: "var(--color-petroleum-deep)",
                border: "1px solid rgba(245, 158, 11, 0.15)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 15px auto",
                    backgroundColor: "var(--color-crude-dark)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    color: "var(--color-fuel-amber)",
                    boxShadow: "0px 0px 25px 0px rgba(245, 158, 11, 0.25)",
                    border: "1px solid var(--color-fuel-amber)",
                  }}
                >
                  {e.icon}
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "var(--color-slate-metal)",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    fontSize: "20px",
                  }}
                >
                  {e.title}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
}
