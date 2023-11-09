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

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === props.slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
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
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
