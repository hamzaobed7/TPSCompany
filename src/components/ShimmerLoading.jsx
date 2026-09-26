import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../images/logo.png";

const LINE_COUNT = 14; // عدد الخطوط المتدفقة

export default function SplashLoader({ logoSrc = logo, brandName = "TPS STATIONS", tagline = "FUEL • SERVICE • TRUST", holdMs = 2000, exitMs = 900, onFinish }) {
  const [phase, setPhase] = useState("loading"); // loading → exiting → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exiting"), holdMs);
    const t2 = setTimeout(() => {
      setPhase("done");
      onFinish?.();
    }, holdMs + exitMs);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [holdMs, exitMs, onFinish]);

  if (phase === "done") return null;
  const exiting = phase === "exiting";

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--color-petroleum-deep)",
        transition: `opacity ${exitMs}ms ease`,
        opacity: exiting ? 0 : 1,
        
        "@keyframes lineFlow": {
          "0%": {
            transform: "rotate(var(--rot)) translateX(120vw) scaleX(0.3)",
            opacity: 0,
          },
          "12%": { opacity: 1 },
          "75%": { opacity: 1 },
          "100%": {
            transform: "rotate(var(--rot)) translateX(0px) scaleX(1)",
            opacity: 0,
          },
        },
        "@keyframes logoPulse": {
          "0%, 100%": {
            boxShadow: "0 0 35px rgba(245,158,11,0.3)",
            filter: "drop-shadow(0 0 12px rgba(245,158,11,0.35))",
          },
          "50%": {
            boxShadow: "0 0 70px rgba(245,158,11,0.55)",
            filter: "drop-shadow(0 0 22px rgba(245,158,11,0.6))",
          },
        },
      }}
    >
      {/* الخطوط المتدفقة من كل الاتجاهات نحو المركز */}
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
          const angle = (360 / LINE_COUNT) * i + 12; // ميل بسيط حتى ما تكون متزامنة
          return (
            <Box
              key={i}
              sx={{
                position: "absolute",
                width: `${110 + (i % 4) * 45}px`, // أطوال متفاوتة للواقعية
                height: i % 3 === 0 ? 3 : 2,
                borderRadius: 3,
                // التدرج مشرق عند الطرف الداخلي (جهة المركز)
                background: "linear-gradient(90deg, rgba(245,158,11,0.95), rgba(245,158,11,0.25), transparent)",
                "--rot": `${angle}deg`,
                transformOrigin: "center",
                animation: exiting ? "none" : `lineFlow ${1.6 + (i % 5) * 0.35}s linear ${-(i * 0.33)}s infinite`,
                // مرحلة التجمع: تنهار نحو المركز وتختفي
                transition: `transform ${exitMs * 0.6}ms cubic-bezier(0.6,0,0.9,0.4) ${i * 25}ms, opacity ${exitMs * 0.5}ms ease ${i * 25}ms`,
                ...(exiting
                  ? {
                      transform: "rotate(var(--rot)) translateX(0px) scaleX(0)",
                      opacity: 0,
                    }
                  : {}),
              }}
            />
          );
        })}
      </Box>

      {/* اللوغو والنص — يتكبّران عند الختام */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          // 🔼 اللوغو يكبر ويختفي بدل ما يصغر
          transform: exiting ? "scale(2.2)" : "scale(1)",
          opacity: exiting ? 0 : 1,
          transition: `transform ${exitMs}ms cubic-bezier(0.5, 0, 0.8, 0.4), opacity ${exitMs * 0.75}ms ease`,
        }}
      >
        <Box
          component="img"
          src={logoSrc}
          alt={brandName}
          sx={{
            width: 110,
            height: 110,
            objectFit: "contain",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(245,158,11,0.25)",
            animation: "logoPulse 2.4s ease-in-out infinite",
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
      </Box>
    </Box>
  );
}
