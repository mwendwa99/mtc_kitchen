import PropTypes from "prop-types";
import { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import { Box, Button, Typography } from "@mui/material";

const BannerCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.slides.map((slide, i) => {
    return (
      <CarouselItem tag="div" key={slide.id}>
        <Box
          key={i}
          sx={{
            position: "relative",
            height: "700px",
            overflow: "hidden",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              maxHeight: "300px",
              width: "70%",
            }}
          >
            <Typography align="center" variant="subtitle1">
              {slide.subtitle}
            </Typography>
            <Typography
              gutterBottom
              sx={{
                mb: 2,
                color: "#ffffff",
                textShadow: "0px 0px 25px #00000080",
              }}
              variant="h3"
            >
              {slide.title}
            </Typography>
            <Button sx={{ width: "fit-content" }} variant="contained">
              order now
            </Button>
          </Box>
        </Box>
      </CarouselItem>
    );
  });

  return (
    <Box>
      <Carousel activeIndex={activeIndex}>
        <CarouselIndicators
          items={slides}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </Box>
  );
};

export default BannerCarousel;

BannerCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};
