import Stack from "@mui/material/Stack";
import Hero from "../sections/Hero";
import OurServices from "../sections/OurServices";
import AboutUs from "../sections/AboutUs";
import WhyChooseUs from "../sections/WhyChooseUs";
import ContactUs from "../sections/ContactUs";
import Footer from "./../sections/Footer";
import Navbar from "../sections/NavBar";

export default function HomePage() {
  return (
    <>
      {/* navbar */}
      {/* section one =>hero */}
      {/*section two => our serivce*/}
      {/*section three => why choose */}
      {/*section four => About us */}
      {/*section five => Contact us */}
      {/* footer */}

      <Stack spacing={3} direction={"column"} sx={{ height: "100vh" }}>
        <Navbar />
        <Hero />
        <OurServices />
        <AboutUs />
        <WhyChooseUs />
        <ContactUs />
        <Footer />
      </Stack>
    </>
  );
}
