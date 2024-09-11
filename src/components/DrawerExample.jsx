import React from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";
import pro from "../img/png.png";
import { ThemeContext } from "../context/context";
import styles from "./styles.css";
const DrawerExample = ({ darkMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Flex
        width="100vw"
        position={"fixed"}
        zIndex={"99"}
        fontSize={"lg"}
        height="70px"
        align="center"
        bgGradient="linear(to-r, cyan.700, purple.500)"
      >
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          mx={"5"}
          my={"2"}
          color={darkMode ? "white" : "#59b256"}
          fontSize={"lg"}
          bg={"#f1f1f2"}
          zIndex={"99"}
          position={"fixed"}
        >
          <Icon as={HamburgerIcon} />
        </Button>
        <h1>Portfolio</h1>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              color={"#59b256"}
              bgGradient="linear(to-tr, cyan.700, purple.500)"
              align="center"
              justify="center"
              position="flex"
              m="0"
              p="2"
            >
              <Box mr={"10"} p={"0"}>
                <Tooltip label="Erik Lewis" fontSize="md">
                  <Avatar size="md" src={pro} />
                </Tooltip>
                <h4>Erik Lewis</h4>
              </Box>
            </DrawerHeader>
            <DrawerBody
              lineHeight={"10vh"}
              textAlign={"center"}
              bgGradient="linear(to-tr, cyan.700, purple.500)"
            >
              <Box fontSize="lg">
                <Link
                  to="intro"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={() => onClose()}
                >
                  <Box _hover={{ bgColor: "darkgrey" }}>Introduction</Box>
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={() => onClose()}
                >
                  <Box _hover={{ bgColor: "darkgrey" }}>About Me</Box>
                </Link>

                <Link
                  to="skill"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={() => onClose()}
                >
                  <Box _hover={{ bgColor: "darkgrey" }}>Skills</Box>
                </Link>
                <Link
                  to="portfoliolist"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={() => onClose()}
                >
                  <Box _hover={{ bgColor: "darkgrey" }}>Project</Box>
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={1000}
                  activeClass={styles.active}
                  spy={true}
                  hashSpy={true}
                  onClick={() => onClose()}
                >
                  <Box _hover={{ bgColor: "darkgrey", cursor: "pointer" }}>
                    Contact
                  </Box>
                </Link>

                <Box my="1">
                  <Box
                    m="0"
                    p="0"
                    _hover={{ bgColor: "darkgrey", cursor: "pointer" }}
                  >
                    <a href="#" target="_blank" rel="noreferrer" download>
                      Resume
                    </a>
                  </Box>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};
export default DrawerExample;
