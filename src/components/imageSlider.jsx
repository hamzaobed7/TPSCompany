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
import photo1 from "../images/home2.png";
import photo3 from "../images/home3.png";
import photo4 from "../images/home4.png";
import photo5 from "../images/home5.png";

const slides = [
  {
    id: 1,
    tag: "حلول متكاملة لبناء وتطوير وصيانة محطات الوقود",
    title: "إنشاء محطات ومستودعات الوقود الاستراتيجية",
    description: "شركاؤكم الهندسيون في قطاع الوقود والطاقة، حلول متكاملة لبناء وتطوير وصيانة محطات الوقود بأعلى معايير الجودة والسلامة العالمية.",
    imageUrl: photo3,
  },
  {
    id: 2,
    tag: "تطوير محطات الوقود بأحدث التقنيات",
    title: "تطوير محطات الوقود الحكيمة",
    description: "نقدم خدمات متكاملة تشمل التصميم والبناء والصيانة، وتطوير محطات الوقود لتواكب أحدث معايير الكفاءة والاستدامة.",
    imageUrl: photo1,
  },
  {
    id: 3,
    tag: "مراكز متخصصة بأيدي خبراء معتمدين",
    title: "مراكز صيانة وغسيل متكاملة",
    description: "مراكز صيانة وغسيل متطورة تضمن أفضل أداء لمركباتكم ومعداتكم مع نخبة من الفنيين المتخصصين.",
    imageUrl: photo4,
  },
  {
    id: 4,
    tag: "تصنيع وفق المعايير الدولية",
    title: "تصنيع خزانات الوقود والخدمات الملحقة",
    description: "تصنيع خزانات وقود عالية الجودة مع خدمات التركيب والفحص الدوري وضمان السلامة التامة.",
    imageUrl: photo5,
  },
  {
    id: 5,
    tag: "خدمات ما بعد البيع على مدار الساعة",
    title: "خدمات دعم وصيانة مستمرة",
    description: "فريقنا جاهز لتقديم الدعم الفني والصيانة الدورية لضمان استمرارية العمل بكفاءة عالية.",
    imageUrl: photo3,
  },
];

const AUTOPLAY_MS = 5000;

export default function ImageSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef(null);
  const maxSteps = slides.length;

  const goTo = useCallback((index) => setActiveStep(((index % maxSteps) + maxSteps) % maxSteps), [maxSteps]);

  const handleNext = useCallback(() => goTo(activeStep + 1), [goTo, activeStep]);
  const handlePrev = useCallback(() => goTo(activeStep - 1), [goTo, activeStep]);

  const startTimer = useCallback(() => {
    // stopTimer();
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
    <Box
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      dir="rtl"
      sx={{
        width: "80%",
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
                fontSize: { xs: "0.8rem", md: "0.95rem" },
              }}
            >
              {slides[activeStep].tag}
            </Typography>
          </Box>

          <AnimatePresence mode="wait">
            <motion.div key={activeStep} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <Typography
                sx={{
                  color: "var(--color-fuel-amber, #f59e0b)",
                  fontWeight: 900,
                  fontSize: { xs: "1.9rem", sm: "2.6rem", md: "3.4rem" },
                  lineHeight: 1.25,
                  maxWidth: 560,
                }}
              >
                {slides[activeStep].title}
              </Typography>
            </motion.div>
          </AnimatePresence>

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
            variant="contained"
            endIcon={<ArrowBackIcon />}
            sx={{
              mt: 1,
              backgroundColor: "var(--color-fuel-amber, #f59e0b)",
              color: "#0b1f1b",
              fontWeight: 800,
              px: 4,
              py: 1.4,
              borderRadius: "12px",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "#fbbf24" },
            }}
          >
            تواصل معنا
          </Button>

          <Box
            sx={{
              mt: { xs: 2, md: 4 },
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 3 },
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                width: 44,
                height: 44,
                "&:hover": { borderColor: "#f59e0b", color: "#f59e0b" },
              }}
            >
              <ArrowForwardIcon />
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
              borderRadius: "50% 50% 0 0",
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
                  height: { xs: 340, sm: 440, md: 560 },
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "50% 50% 12px 12px",
                  filter: "brightness(0.85)",
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
              bottom: -14,
              right: 20,
              left: 60,
              height: "30px",
              backgroundColor: "var(--color-petroleum-deep)",
              border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: "10px",
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

      {/* زر النزول للخدمات */}
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
  );
}
