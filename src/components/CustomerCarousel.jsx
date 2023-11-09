import PropTypes from "prop-types";
import { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const CustomerCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

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

  const slides = props.slides.map((slide) => {
    return (
      <CarouselItem tag="div" key={slide.id}>
        <Box sx={{ backgroundColor: "#eeeeee", height: "100%", p: 4 }}>
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
            }}
          >
            <Typography
              align="center"
              variant="subtitle1"
              sx={{ color: "#D4B254" }}
            >
              {slide.subtitle}
            </Typography>
            <Typography align="center" variant="h5" gutterBottom sx={{ mb: 4 }}>
              {slide.title}
            </Typography>
            <Typography align="center" variant="body2" gutterBottom>
              {slide.description}
            </Typography>
            <Typography align="center" variant="caption" gutterBottom>
              {slide.customer}
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              Frequently Asked Questions
            </Button>
          </Container>
        </Box>
      </CarouselItem>
    );
  });

  return (
    <Box>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}

        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />

        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Box>
  );
};

export default CustomerCarousel;

CustomerCarousel.propTypes = {
  slides: PropTypes.array.isRequired,
};
