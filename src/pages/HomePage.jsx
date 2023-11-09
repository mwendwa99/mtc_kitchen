import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import Slider from "react-slick";

import Header from "../components/Header";
import Carousel from "../components/Carousel";

import background from "../assets/images/background.png";
import background2 from "../assets/images/background2.png";
import background3 from "../assets/images/background3.png";
import discover from "../assets/images/discover.png";

const carouselSlides = [
  {
    id: 1,
    image: background,
    title: "Bespoke & made to measure handmade kitchen design",
    subtitle: "Design and order your new kitchen online today",
  },
  {
    id: 2,
    image: background2,
    title: "lorem ipsum dolor sit amet consectetur",
    subtitle: "Design and order your new kitchen online today",
  },
  {
    id: 3,
    image: background3,
    title: "lorem ipsum dolor sit amet consectetur",
    subtitle: "Design and order your new kitchen online today",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <Box style={{ position: "absolute", top: 0, zIndex: 999, width: "100%" }}> */}
      <Header />
      {/* </Box> */}

      {/* Landing Section */}
      <Box>
        <Carousel slides={carouselSlides} />
      </Box>

      {/* About Us Section */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ p: 0, m: 0, width: "100%", height: "100%" }}
          >
            <img
              src={discover}
              alt="discover"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 4,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="button"
                sx={{ color: "#D4B254" }}
              >
                Quality Craftmanship from build to delivery
              </Typography>
              <Typography gutterBottom variant="h2">
                Discover the beauty of a handmade kitchen
              </Typography>
              <Typography gutterBottom variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget est sit amet sapien venenatis maximus vel in urna. Nam
                mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut
                imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.
              </Typography>
              <Button variant="contained">About Us</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Customer Feedback Carousel */}
      <Container>
        {/* <Slider {...carouselSettings}> */}
        {/* Add your feedback items here */}
        {/* </Slider> */}
        <Button variant="contained">Frequently Asked Questions</Button>
      </Container>

      {/* Customer Gallery */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          {/* Add your gallery images here */}
        </Grid>
        <Button variant="contained">View More</Button>
      </Container>

      {/* Footer Section */}
      <Container>
        <Grid container spacing={2}>
          {/* Add your footer content here */}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
