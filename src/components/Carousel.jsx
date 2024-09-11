import Slider from "react-slick";
import { Box, IconButton, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Next } from "../img/next.svg";
import { ReactComponent as Prev } from "../img/previous.svg";
import "../index.css";
const NextArrow = ({ onClick }) => (
  <IconButton
    icon={<Next />}
    className="iconB"
    onClick={onClick}
    position="absolute"
    right="5vw"
    top="4%"
    transform="translateY(-50%)"
    zIndex="2"
    aria-label="Next"
  />
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    icon={<Prev />}
    className="iconB"
    onClick={onClick}
    position="absolute"
    left="5vw"
    top="4%"
    transform="translateY(-50%)"
    zIndex="2"
    aria-label="Previous"
  />
);

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Add this line
    nextArrow: <NextArrow />, // Add this line
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      width="100vw"
      mt="10px"
      pos="relative"
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      borderRadius="10px"
      overflow="hidden"
    >
      <Box className="d-bg"></Box>
      <Heading
        width={"100%"}
        m="auto"
        textAlign={"center"}
        justifyContent="center"
        top="1%"
        display="flex"
        pos="absolute"
        zIndex="10"
      >
        My <span style={{ color: "#59b256" }}> Projects</span>
      </Heading>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default Carousel;
