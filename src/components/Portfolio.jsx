import {
  Box,
  Code,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaEye, FaGithub } from "react-icons/fa";
import "../index.css";
const PortFolio = ({
  img,
  link1,
  link2,
  ProjectName,
  description,
  techstack,
  id,
  feature,
  role,
}) => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      <Stack
        key={id}
        align="stretch"
        w={isLargerThan ? "85%" : "100%"}
        h={["60vh", "80vh", "90vh", "80vh"]}
        borderRadius="10px 10px 0px 0px"
        overflow={"hidden"}
        className="container1"
      >
        <Box className="card1">
          <Box className="logo">
            <Box className="circle circle1"></Box>
            <Box className="circle circle2"></Box>
            <Box className="circle circle3"></Box>
            <Box className="circle circle4"></Box>
            <Box className="circle circle5">
              <i class="fa-solid fa-seedling"></i>
            </Box>
          </Box>
          <Box className="glass">
            <Box className="content">
              <Flex
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
              >
                <Tooltip label="Deploy">
                  <Text>
                    <a href={link2} target="_blank" rel="noreferrer">
                      <Box
                        mx={"5"}
                        my={"2"}
                        fontSize={["xl", "2xl", "3xl", "4xl"]}
                      >
                        <FaEye />
                      </Box>
                    </a>
                  </Text>
                </Tooltip>
                <Tooltip label="Source Code">
                  <Text>
                    <a href={link1} target="_blank" rel="noreferrer">
                      <Box
                        mx={"5"}
                        my={"2"}
                        fontSize={["xl", "2xl", "3xl", "4xl"]}
                      >
                        <FaGithub />
                      </Box>
                    </a>
                  </Text>
                </Tooltip>
              </Flex>
              <Box>
                <Box position={"sticky"} zIndex={"2"}>
                  <Box>
                    <Heading
                      color={"#59b256"}
                      fontSize={"2xl"}
                      fontWeight={"semibold"}
                      textDecoration={"underline"}
                      textAlign={"center"}
                      className="judul"
                    >
                      {ProjectName}
                    </Heading>
                  </Box>
                  <Box>
                    <Text
                      fontSize={["xs", "sm", "md", "md"]}
                      className="description1"
                    >
                      {" "}
                      {description}
                    </Text>
                  </Box>
                  {/* <Box>
              <Text>
                <Code fontSize={"lg"} fontWeight={"bold"} color={"green"}>
                  Feature:
                </Code>
                {feature}
              </Text>
            </Box>
            <Box>
              <Text>
                <Code fontSize={"lg"} fontWeight={"bold"} color={"green"}>
                  Role:
                </Code>
                {role}
              </Text>
            </Box> */}
                  <Box>
                    <Text fontSize={["xs", "sm", "md", "md"]}>
                      <Code fontWeight={"bold"} color={"green"}>
                        Tech Stack:
                      </Code>{" "}
                      {techstack}
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box display="inline-block" overflow={"hidden"}>
                <Box>
                  <Image
                    transition="transform .4s"
                    display="block"
                    _hover={{
                      transform: "scale(1.2)",
                      transformOrigin: "50% 50%",
                    }}
                    src={img}
                  />
                </Box>
              </Box>
              <Box className="kaki">
                <Box className="social" display="flex" gap="10px">
                  <Box className="social_icons">
                    <i class="fa-brands fa-facebook"></i>
                  </Box>
                  <Box className="social_icons">
                    <i class="fa-brands fa-linkedin"></i>
                  </Box>
                  <Box className="social_icons">
                    <i class="fa-brands fa-square-twitter"></i>
                  </Box>
                </Box>
                <Box className="link" display="flex" alignItems="center">
                  <Text>Read More</Text>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default PortFolio;
