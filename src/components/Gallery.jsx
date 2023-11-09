import { useState } from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

import gallery1 from "../assets/images/gallery1.png";
import gallery2 from "../assets/images/gallery2.png";
import gallery3 from "../assets/images/gallery3.png";
import gallery4 from "../assets/images/gallery4.png";

const Gallery = () => {
  const initialVisibleImages = 4;
  const [visibleImages, setVisibleImages] = useState(initialVisibleImages);

  const imageStyle = {
    objectFit: "cover",
    width: "200px",
    height: "200px",
  };

  const allImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
  ];

  const visibleImageSlice = allImages.slice(0, visibleImages);

  const handleViewMore = () => {
    if (visibleImages === initialVisibleImages) {
      setVisibleImages(allImages.length);
    } else {
      setVisibleImages(initialVisibleImages);
    }
  };

  return (
    <Box sx={{ p: 10 }}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            item
            md={12}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Typography align="center" gutterBottom variant="h5">
              Customer Gallery
            </Typography>
          </Grid>
          {visibleImageSlice.map((image, index) => (
            <Grid item xs={12} md={3} key={index}>
              <img
                style={imageStyle}
                src={image}
                alt={`gallery-${index + 1}`}
              />
            </Grid>
          ))}
          <Grid
            item
            md={12}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button variant="contained" sx={{ mt: 3 }} onClick={handleViewMore}>
              {visibleImages === initialVisibleImages
                ? "View more"
                : "View less"}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
