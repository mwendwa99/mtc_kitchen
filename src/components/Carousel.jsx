import PropTypes from "prop-types";
import { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import { Box, Button, Typography } from "@mui/material";

const CarouselBanner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.slides.map((slide, i) => {
    return (
      <CarouselItem className="custom-tag" tag="div" key={slide.id}>
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
            }}
          >
            <Typography variant="subtitle1">{slide.subtitle}</Typography>
            <Typography gutterBottom sx={{ mb: 2 }} variant="h3">
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
    <div className="banner">
      <Carousel activeIndex={activeIndex}>
        <CarouselIndicators
          items={slides}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;

CarouselBanner.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// import PropTypes from "prop-types";
// import Carousel from "react-material-ui-carousel";
// import { Box, Button, Typography } from "@mui/material";

// export default function CarouselComponent(props) {
//   return (
//     <Carousel
//       indicators={true}
//       swipe={true}
//       animation="slide"
//       navButtonsAlwaysInVisible
//       autoPlay={true}
//       duration={1000}
//     >
//       {props.slides.map((slide, i) => (
//         <Box
//           key={i}
//           sx={{
//             position: "relative",
//             height: "500px",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               position: "absolute",
//               top: "0",
//               left: "0",
//             }}
//           />
//           <Box
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               textAlign: "center",
//               color: "white",
//             }}
//           >
//             <Typography variant="button">{slide.subtitle}</Typography>
//             <Typography variant="h1">{slide.title}</Typography>
//             <Button variant="contained">order now</Button>
//           </Box>
//         </Box>
//       ))}
//     </Carousel>
//   );
// }

// CarouselComponent.propTypes = {
//   slides: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
