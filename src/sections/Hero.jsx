import Box from "@mui/material/Box";
import ImageSlider from "../components/imageSlider";
import Statical from "../components/Statical";
export default function Hero() {
  return (
    <>
      <Box id="hero" sx={{position:"relative",top:"50px"}} >
        <ImageSlider />
        <Statical />
      </Box>
    </>
  );
}
