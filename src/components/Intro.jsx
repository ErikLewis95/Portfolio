import "./intro.css";
import profile from "../img/erik.jpg";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import "./intro.css";
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isLargerThan] = useMediaQuery("(min-width: 489px)");

  return (
    <Box
      id="intro"
      maxW={"100%"}
      maxH={"100%"}
      boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 
0.32)"
      borderRadius="10px"
      overflow="hidden"
      position="relative"
      mt={0}
      mb={0}
    >
      <Box
        height="100%"
        position="absolute"
        left="0"
        top="0"
        width="10px"
        background="radial-gradient(
       in hsl longer hue,
       #5c0067 0%,
       #00d4ff 100%
     );"
      ></Box>
      <Flex
        id="intro"
        lineHeight={"1rem"}
        flexDirection={isLargerThan ? "row" : "column"}
        w={["100%", "100%", "100%", "100%"]}
        height={["100vh", "80vh", "90vh", "100vh"]}
      >
        <Flex alignItems={"center"} alignContent={"center"} flex={"1"}>
          <Flex
            p="50px"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Text
              fontSize={["2xl", "lg", "2xl", "3xl"]}
              fontWeight={"semibold"}
              my={"5"}
            >
              Hello, <br />
              <br />
              My name <br />
              <br />
              is
            </Text>
            <Heading fontSize={["4xl", "xl", "4xl", "5xl"]}>
              <Text className="type">
                Erik Lewis <span style={{ color: "#59b256" }}>Simaremare</span>
              </Text>
            </Heading>
            <Flex gap="15px" marginBottom={"1rem"} my={"5"}>
              <Tooltip label="My Github">
                <Box>
                  <a href="https://github.com/ErikLewis95" target="blank">
                    <BsGithub
                      size="2rem"
                      color={darkMode ? "white" : "green"}
                    />
                  </a>
                </Box>
              </Tooltip>
              <Tooltip label="My Linkedin">
                <Box>
                  <a href="" target="blank">
                    <BsLinkedin
                      size="2rem"
                      color={darkMode ? "white" : "green"}
                    />
                  </a>
                </Box>
              </Tooltip>
            </Flex>

            {/* --------------------------------------------------------------------------------------------- */}
            <Tooltip label={"Click To Download Resume"}>
              <Box>
                <a
                  className="resume_link"
                  href={require("../resume/Erik_Lewis_Simaremare_Resume.pdf")}
                  download="Erik Lewis Resume"
                  my={"5"}
                >
                  <Flex
                    alignItems={"center"}
                    bg={darkMode ? "white" : "#2a3132"}
                    color={darkMode ? "black" : "white"}
                  >
                    Resume
                    <BsFillPlayCircleFill />
                  </Flex>
                </a>
              </Box>
            </Tooltip>
            {/* ------------------------------------------------------------------------------------------------------ */}

            {/* <p className="i-desc">
           
          </p> */}
          </Flex>
        </Flex>
        <Box className="i-right" pt={isLargerThan ? "5" : null} mx={"5"}>
          <Box
            position={"absolute"}
            bgGradient={"linear(to-r, #59b256, #59b256)"}
            w={["100%", "100%", "100%", "100%"]}
            h={["45vh", "65vh", "75vh", "95vh"]}
          ></Box>
          <Image
            src={profile}
            alt="Naresh Rajput"
            width={["100%", "100%", "100%", "100%"]}
            height={["45vh", "65vh", "75vh", "95vh"]}
            position="absolute"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
