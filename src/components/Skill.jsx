import React from "react";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { techStack } from "../data/data";
import GitHubGreen from "./GitHubGreen";
import "../index.css";

const Skill = () => {
  const [isSmallerThan] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      <Box
        id="skill"
        maxW={"100%"}
        maxH={"100%"}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.32), 0 6px 20px 0 rgba(0, 0, 0, 0.32)"
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
        <Box className={"e-bg"}></Box>
        <Box>
          <Heading textAlign={"center"}>
            Ski<span style={{ color: "#59b256" }}>lls</span>
          </Heading>
        </Box>
        <Divider />
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          textDecoration={"underline"}
          my={"5"}
        >
          Tech <span style={{ color: "#59b256" }}>Skills</span>
        </Text>{" "}
        <Box className="banner">
          {techStack.map((el, index) => (
            <Box
              key={index} // Pastikan key ada di sini
              className="slider"
              style={{ "--quantity": techStack.length }}
            >
              <Box
                className="item"
                style={{ "--position": index + 1 }}
                alignItems="center"
                justifyContent="center"
                transition={"all 0.9s ease"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                _hover={{
                  transform: "scale(1.2)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  bg: "skyblue",
                }}
              >
                <Image
                  width="100%"
                  height="auto"
                  alt={el.name}
                  src={el.link}
                  objectFit="contain"
                />
                <Text align="center" fontWeight={"semibold"}>
                  {el.name}
                </Text>
              </Box>
            </Box>
          ))}
          <div className="content">
            <Box className="model"></Box>
          </div>
        </Box>
        <Divider />
        <Text
          my={"7"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          textDecoration={"underline"}
        >
          Soft <span style={{ color: "#59b256" }}>Skills</span>
        </Text>
        <Flex
          w="90%"
          m="auto"
          my={"7"}
          p={"1rem"}
          mx={"2"}
          fontSize={["lg", "lg", "sm", "md"]}
          fontWeight={"extrabold"}
          justifyContent={"space-around"}
          flexDirection={isSmallerThan ? "row" : "column"}
          justifyItems={"center"}
        >
          <Box>🎯 Punctuality</Box>
          <Box>🎯 Time-Management</Box>
          <Box>🎯 Adaptability</Box>
          <Box>🎯 Teamwork</Box>
          <Box>🎯 Collaborative</Box>
        </Flex>
        <Divider />
        <GitHubGreen />
      </Box>
    </>
  );
};

export default Skill;
