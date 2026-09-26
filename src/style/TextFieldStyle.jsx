export const customTextFieldStyle = {
  "& .MuiInputLabel-root": {
    color: "var(--color-slate-metal)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--color-fuel-amber)",
  },
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
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
