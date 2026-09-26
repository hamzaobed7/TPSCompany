import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { CounterNumber } from "../HelperFunction/IncremnetCounter";
import Box from "@mui/material/Box";
import { motion } from "motion/react";

const data = [
  {
    icon: <HandshakeIcon sx={{ color: "var(--color-fuel-amber)", fontSize: "42px", fontWeight: "600" }} />,
    num: 300,
    title: " Clients ",
  },
  {
    icon: <LocalGasStationIcon sx={{ color: "var(--color-fuel-amber)", fontSize: "42px", fontWeight: "600" }} />,
    num: 1300,
    title: "Station ",
  },
  {
    icon: <AddLocationIcon sx={{ color: "var(--color-fuel-amber)", fontSize: "42px", fontWeight: "800" }} />,
    num: 10,
    title: "Country",
  },
];
export default function Statical() {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={0}
        sx={{
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          // boxShadow: "0 0 25px rgba(245, 158, 11, 0.4)",
        }}
      >
        {data.map((e, index) => {
          return (
            <Stack
              component={motion.div}
              initial={{ opacity: 0.2, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              direction={"column"}
              key={index}
              sx={{ textAlign: "center", py: 2 }}
            >
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "5px solid var(--color-fuel-amber)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px auto",
                }}
              >
                {e.icon}
              </Box>
              <Typography variant="body1" sx={{ color: "var(--color-slate-metal)", fontSize: { md: "32px", xs: "20px" } }}>
                {e.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "var(--color-slate-metal)", fontWeight: "600", fontSize: { md: "32px", xs: "20px" } }}>
                <CounterNumber value={e.num} />+
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}
