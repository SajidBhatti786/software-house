import React, { useEffect } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUsLight from "../assets/aboutUsLight.jpg";
import aboutUsDark from "../assets/aboutUsDark.jpg";
const AboutUs = ({ mode }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const backgroundUrl =
    theme.palette.mode === "light" ? aboutUsLight : aboutUsDark;
  console.log(backgroundUrl);
  return (
    <Box
      py={6}
      id="about-us"
      style={{
        background: `url(${backgroundUrl}) center/cover fixed no-repeat`,
        // color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={isSmallScreen ? 2 : 4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              About Us
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              paragraph
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              fontSize="1.4rem"
            >
              We are a team of passionate professionals dedicated to providing
              high-quality services in web development, app development, graphic
              design, and SEO.
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              paragraph
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Our mission is to help businesses succeed by creating innovative
              digital solutions tailored to their needs. With a focus on
              excellence and creativity, we strive to exceed expectations and
              deliver results.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={Paper}
              elevation={3}
              p={3}
              style={{
                background: colors.primary[400],
                borderRadius: "10px",
              }}
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: colors.primary[100] }}
              >
                Our Team
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Meet our dedicated and talented team of experts who are
                passionate about delivering the best solutions for our clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
