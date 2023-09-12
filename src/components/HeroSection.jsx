import React, { useEffect, useRef } from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage1 from "../assets/heroImage1.png";
import WebDevelopmentIcon from "@mui/icons-material/Web";
import AppDevelopmentIcon from "@mui/icons-material/PhoneAndroid";
import SeoIcon from "@mui/icons-material/Search";
import GraphicDesignIcon from "@mui/icons-material/Brush";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import Typed from "typed.js";

const HeroSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const services = [
    "Web Development",
    "App Development",
    "Graphic Designing",
    "SEO",
  ];
  const typedTextRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const options = {
      strings: services,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      showCursor: false,
      cursorChar: "|",
      onComplete: (self) => {
        // self.cursor.remo1.5e();
        setTimeout(() => {
          self.reset();
        }, 1000); // Add a delay before restarting typing
      },
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box backgroundColor={colors.primary[400]} className="hero-section">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="hero-content">
              <Typography
                variant="h1"
                color={colors.primary[100]}
                component="h1"
                gutterBottom
                fontSize="3rem"
              >
                𝗬𝗼𝘂𝗿 𝗢𝘄𝗻 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗛𝗼𝘂𝘀𝗲
              </Typography>
              <Typography
                variant="subtitle1"
                paragraph
                color={colors.primary[100]}
                fontSize="1.2rem"
                // diplay="block"
              >
                We offer a wide range of services including{" "}
                <Box
                  // display="inline-block"
                  // backgroundColor={colors.redAccent[600]}
                  color={colors.greenAccent[100]}
                  fontSize="1.5rem"
                  fontWeight="bold"
                  // color={colors.primary[100]}
                  ref={typedTextRef}
                ></Box>
              </Typography>
              <Box
                className="service-icons"
                // backgroundColor={colors.blueAccent[900]}
              >
                <WebDevelopmentIcon
                  style={{
                    // backgroundColor: colors.blueAccent[900],
                    color: colors.primary[100],
                    fontSize: "1.5rem",
                    // padding: "0.2rem",
                    // height: "auto",
                  }}
                />
                <AppDevelopmentIcon
                  style={{ color: colors.primary[100], fontSize: "1.5rem" }}
                />
                <GraphicDesignIcon
                  style={{ color: colors.primary[100], fontSize: "1.5rem" }}
                />
                <SeoIcon
                  style={{ color: colors.primary[100], fontSize: "1.5rem" }}
                />
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div
              className="hero-image"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={heroImage1}
                alt="Software House"
                width="100%"
                height="auto"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
