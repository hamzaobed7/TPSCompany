import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";
import { motion } from "framer-motion";
import { BackgroundLines } from "../HelperFunction/BackGround";
const LINE_COUNT = 14;
export default function SplashLoader({ logoSrc = logo, brandName = "TPS STATIONS", tagline = "FUEL • SERVICE • TRUST", holdMs = 2000, exitMs = 900, onFinish }) {
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exiting"), holdMs);
    return () => clearTimeout(t1);
  }, [holdMs]);

  if (phase === "done") return null;
  const exiting = phase === "exiting";
  const handleExitComplete = () => {
    setPhase("done");
    onFinish?.();
  };

  return (
    <motion.div
      variants={{
        loading: { y: 0, opacity: 1 },
        exiting: {
          y: "-100%",
          opacity: 0,
          transition: { duration: exitMs / 1000, ease: "easeInOut" },
        },
      }}
      initial="loading"
      animate={exiting ? "exiting" : "loading"}
      onAnimationComplete={(variant) => {
        if (variant === "exiting") handleExitComplete();
      }}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--color-petroleum-deep)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: LINE_COUNT }).map((_, i) => {
          const angle = (360 / LINE_COUNT) * i + 12;

          return (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: `${210 + (i % 4) * 45}px`,
                height: i % 4 === 0 ? 4 : 3,
                borderRadius: 3,
                background: "linear-gradient(90deg, rgba(245,158,11,0.95), rgba(245,158,11,0.25), transparent)",
                transformOrigin: "center",
              }}
              animate={
                exiting
                  ? {
                      transform: `rotate(${angle}deg) translateX(0px) scaleX(0)`,
                      opacity: 0,
                    }
                  : {
                      transform: [`rotate(${angle}deg) translateX(120vw) scaleX(0.3)`, `rotate(${angle}deg) translateX(0px) scaleX(1)`],
                      opacity: [0, 1, 1, 0],
                    }
              }
              transition={
                exiting
                  ? {
                      duration: (exitMs * 0.6) / 1000,
                      delay: i * 0.025,
                      ease: [0.6, 0, 0.9, 0.4],
                    }
                  : {
                      transform: {
                        duration: 1.6 + (i % 5) * 0.35,
                        repeat: Infinity,
                        delay: -(i * 0.33),
                        ease: "linear",
                      },
                      opacity: {
                        duration: 1.6 + (i % 5) * 0.35,
                        repeat: Infinity,
                        delay: -(i * 0.33),
                        ease: "linear",
                        times: [0, 0.12, 0.75, 1],
                      },
                    }
              }
            />
          );
        })}
      </Box>
      <motion.div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
        animate={exiting ? { scale: 2.2, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={
          exiting
            ? {
                duration: exitMs / 1000,
                ease: [0.5, 0, 0.8, 0.4],
              }
            : { duration: 0 }
        }
      >
        <motion.img
          src={logoSrc}
          alt={brandName}
          style={{
            width: 210,
            height: 210,
            objectFit: "contain",
            borderRadius: 24,
            // background: "rgba(255,255,255,0.04)",
            // border: "1px solid rgba(245,158,11,0.25)",
          }}
          animate={{
            boxShadow: ["0 0 35px rgba(245,158,11,0.3)", "0 0 70px rgba(245,158,11,0.55)", "0 0 35px rgba(245,158,11,0.3)"],
            filter: ["drop-shadow(0 0 12px rgba(245,158,11,0.35))", "drop-shadow(0 0 22px rgba(245,158,11,0.6))", "drop-shadow(0 0 12px rgba(245,158,11,0.35))"],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Typography
          sx={{
            color: "#f59e0b",
            fontWeight: 800,
            fontSize: "1.5rem",
            letterSpacing: "4px",
            textShadow: "0 0 25px rgba(245,158,11,0.4)",
          }}
        >
          {brandName}
        </Typography>

        <Typography
          sx={{
            color: "rgba(200,215,255,0.45)",
            fontSize: "0.7rem",
            letterSpacing: "6px",
          }}
        >
          {tagline}
        </Typography>
      </motion.div>
    </motion.div>
  );
}
