import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import WebDevelopmentIcon from "@mui/icons-material/Web";
import AppDevelopmentIcon from "@mui/icons-material/PhoneAndroid";
import SeoIcon from "@mui/icons-material/Search";
import GraphicDesignIcon from "@mui/icons-material/Brush";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const servicesData = [
  {
    icon: <WebDevelopmentIcon fontSize="large" />,
    title: "Web Development",
    description:
      "We create responsive and user-friendly websites tailored to your business needs.",
  },
  {
    icon: <AppDevelopmentIcon fontSize="large" />,
    title: "App Development",
    description:
      "We design and develop mobile applications for both Android and iOS platforms.",
  },
  {
    icon: <GraphicDesignIcon fontSize="large" />,
    title: "Graphic Designing",
    description:
      "Our creative team crafts stunning visuals and graphics for your branding and marketing needs.",
  },
  {
    icon: <SeoIcon fontSize="large" />,
    title: "SEO",
    description:
      "We optimize your online presence to improve search engine rankings and drive traffic to your website.",
  },
];

const Services = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box py={6} id="services" backgroundColor={colors.primary[400]}>
      <Container>
        <Divider>
          <Typography
            variant="h1"
            align="center"
            fontSize="3rem"
            style={{
              margin: "0 15px",
              color: colors.primary[100],
            }}
          >
            Services
          </Typography>
        </Divider>
        <Box display="flex" alignItems="center" justifyContent="center" mb={3}>
          <Divider
            style={{
              color: colors.redAccent[600],
            }}
          ></Divider>
        </Box>
        <Typography
          variant="subtitle1"
          paragraph
          color={colors.primary[100]}
          fontSize="1.2rem"
          textAlign="center"
        >
          We offer a wide range of services to meet your business requirements.
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          backgroundColor={colors.primary[400]}
        >
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: colors.primary[400],
                  padding: "20px",
                  textAlign: "center",
                  transition: "transform 0.2s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.backgroundColor =
                    colors.blueAccent[600];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = colors.primary[400];
                }}
              >
                {service.icon}
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    margin: "20px 0",
                    fontSize: "1.5rem",
                    color: colors.primary[100],
                  }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" color={colors.primary[100]}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
