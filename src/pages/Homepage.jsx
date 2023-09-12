import React from "react";
// import { makeStyles } from '@material-ui/core/styles'
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
function Homepage() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
    </>
  );
}
export default Homepage;
