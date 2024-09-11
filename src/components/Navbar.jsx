import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { Tooltip } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import pro from "../img/png.png";
import { ThemeContext } from "../context/context";
import styles from "./styles.css";
import DrawerExample from "./DrawerExample";

const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Box className="root">
      {isLargerThan ? (
        <Flex
          bg={darkMode ? "#2a3132" : "#f1f1f2"}
          position={"fixed"}
          zIndex={"99"}
          className={"nav"}
        >
          <Flex
            fontSize={"md"}
            gap={"20px"}
            my={"2"}
            color={darkMode ? "#2a3132" : "#f1f1f2"}
            fontWeight={"semibold"}
            bgGradient="linear(to-l, cyan.700, purple.500)"
            width="100vw"
            mt={0}
            mb={0}
            align="center"
          >
            <Link
              to="intro"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}
            >
              <Box>
                <Tooltip label="Erik Lewis" fontSize="md">
                  <Avatar size="lg" src={pro} />
                </Tooltip>
              </Box>
            </Link>
            <h4>Portfolio</h4>
            <Box m="0" p="0">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <Box m="0" p="0">
                  <Tooltip label="About Me" fontSize="md">
                    About
                  </Tooltip>
                </Box>
              </Link>
            </Box>
            <Box m="0" p="0">
              <Link
                to="skill"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <Box>
                  <Tooltip label="My Skills" fontSize="md">
                    Skill
                  </Tooltip>
                </Box>
              </Link>
            </Box>
            <Box m="0" p="0">
              <Link
                to="portfoliolist"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <Box>
                  <Tooltip label="My Projects" fontSize="md">
                    Project
                  </Tooltip>
                </Box>
              </Link>
            </Box>
            <Box m="0" p="0">
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
              >
                <Box>
                  <Tooltip label="My Contact" fontSize="md">
                    Contact
                  </Tooltip>
                </Box>
              </Link>
            </Box>
            <Box>
              <Box m="0" p="0">
                <a
                  href={require("../resume/Erik_Lewis_Simaremare_Resume.pdf")}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  <Tooltip label="Click To Download Resume" fontSize="md">
                    Resume
                  </Tooltip>
                </a>
              </Box>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <DrawerExample />
      )}
    </Box>
  );
};

export default Navbar;
