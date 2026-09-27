// src/components/ImageSlider.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "../HelperFunction/BackGround";
import { slides } from "../constants/HomeData";
const AUTOPLAY_MS = 5000;
export default function ImageSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef(null);
  const maxSteps = slides.length;
  const goTo = useCallback((index) => setActiveStep(((index % maxSteps) + maxSteps) % maxSteps), [maxSteps]);
  const handleNext = useCallback(() => goTo(activeStep + 1), [goTo, activeStep]);
  const handlePrev = useCallback(() => goTo(activeStep - 1), [goTo, activeStep]);
  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, AUTOPLAY_MS);
  }, [maxSteps]);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer]);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <>
      <BackgroundLines />
      <Box
        onMouseEnter={stopTimer}
        onMouseLeave={startTimer}
        dir="rtl"
        sx={{
          width: "70%",
          height: "90vh",
          margin: "10px auto",
          position: "relative",
          overflow: "hidden",
          background: "var(--color-crude-dark)",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            right: "-8%",
            width: { xs: 380, md: 620 },
            height: { xs: 380, md: 620 },
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-25%",
            left: "-10%",
            width: { xs: 300, md: 1020 },
            height: { xs: 300, md: 1020 },
            borderRadius: "50%",
            border: "1px dashed rgba(245,158,11,0.15)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 4 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 1 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "right" },
              gap: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-fuel-amber, #f59e0b)",
                }}
              />
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: { xs: "0.8rem", md: "1.2rem" },
                }}
              >
                {slides[activeStep].tag}
              </Typography>
            </Box>
            <motion.div key={activeStep} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <Typography
                sx={{
                  color: "var(--color-fuel-amber, #f59e0b)",
                  fontWeight: 900,
                  fontSize: { xs: "1.9rem", sm: "2.6rem", md: "4.4rem" },
                  lineHeight: 1.55,
                  maxWidth: 560,
                  textWrap: "wrap",
                  wordBreak: "break-word",
                }}
              >
                {slides[activeStep].title}
              </Typography>
            </motion.div>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.9,
                maxWidth: 480,
              }}
            >
              {slides[activeStep].description}
            </Typography>

            <Button
              sx={{
                width: "200px",
                height: "70px",
                borderTopLeftRadius: "999px",
                borderBottomLeftRadius: "999px",
                backgroundColor: "var(--color-fuel-amber)",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography sx={{ fontWeight: "600", color: "white", fontSize: "15px" }}>Contact</Typography>
              <IconButton
                onClick={handleNext}
                sx={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  width: 44,
                  height: 44,
                  "&:hover": { borderColor: "#f59e0b", color: "#f59e0b" },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Button>

            <Box
              sx={{
                mt: { xs: 2, md: 4 },
                display: "flex",
                alignItems: "center",
                gap: { xs: 2, md: 8 },
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  width: 44,
                  height: 40,
                  "&:hover": { borderColor: "#f59e0b", color: "#f59e0b" },
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: "20px" }} />
              </IconButton>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {slides.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => goTo(i)}
                    sx={{
                      width: i === activeStep ? 26 : 6,
                      height: 6,
                      borderRadius: 3,
                      backgroundColor: i === activeStep ? "var(--color-fuel-amber, #f59e0b)" : "rgba(255,255,255,0.25)",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>

              <IconButton
                onClick={handleNext}
                sx={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  width: 44,
                  height: 44,
                  "&:hover": { borderColor: "#f59e0b", color: "#f59e0b" },
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.85rem",
                  letterSpacing: 2,
                  mr: 1,
                }}
              >
                {pad(activeStep + 1)} / {pad(maxSteps)}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              order: { xs: 1, md: 2 },
              position: "relative",
              width: { xs: "90%", sm: 420, md: 720 },
              height: "500px",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: -18,
                borderRadius: "999px 999px 0 0",
                border: "1px solid rgba(245,158,11,0.25)",
                borderBottom: "none",
                pointerEvents: "none",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ width: "100%" }}
              >
                <Box
                  component="img"
                  src={slides[activeStep].imageUrl}
                  alt={slides[activeStep].title}
                  sx={{
                    width: "100%",
                    height: { xs: 340, sm: 640, md: 560 },
                    objectFit: "fill",
                    objectPosition: "center",
                    display: "block",
                    borderRadius: "999px 999px 12px 12px",
                    filter: "brightness(0.85)",
                    transition: "transform 0.5s ease, filter 0.5s ease",
                    ":hover": {
                      filter: "brightness(1)",
                      transform: "scale(1.03)",
                    },
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <IconButton
              onClick={() => window.open(slides[activeStep].imageUrl, "_blank")}
              sx={{
                position: "absolute",
                bottom: 70,
                left: -14,
                backgroundColor: "#fff",
                width: 42,
                height: 42,
                "&:hover": { backgroundColor: "#f59e0b" },
              }}
            >
              <ZoomOutMapIcon fontSize="small" sx={{ color: "#0b1f1b" }} />
            </IconButton>

            <Box
              sx={{
                position: "absolute",
                top: 500,
                width: "100%",
                left: 150,
                height: "40px",
                py: 1,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: { xs: "0.75rem", md: "1.35rem" },
                  textAlign: "center",
                }}
              >
                {slides[activeStep].title}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            zIndex: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              width: 56,
              height: 56,
              animation: "bounceY 2s infinite",
              "@keyframes bounceY": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(8px)" },
              },
              "&:hover": { backgroundColor: "rgba(245,158,11,0.15)" },
            }}
          >
            <KeyboardArrowDownIcon sx={{ color: "#f59e0b" }} />
          </IconButton>
          <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>الخدمات</Typography>
        </Box>
      </Box>
    </>
  );
}
