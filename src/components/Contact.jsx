import React from "react";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../context/context";
import emailjs from "emailjs-com";
import { FcHome, FcPhone } from "react-icons/fc";
import { AiTwotoneMail } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import swal from "sweetalert";
import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import ThankYou from "../img/thank-you.png";
import "../index.css";
const Contact = () => {
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pj0jt1l",
        "template_ekjyzje",
        form.current,
        "mJTQDZrrWE46Op6Gb"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("¡Success!", "Message sent!", "success");
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          swal("Oops...", "Something went wrong :(", "error");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Box
        className="c"
        width="100vw"
        id="contact"
        my={"2rem"}
        mt="10px"
        fontSize={["xs", "sm", "md", "md"]}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        borderRadius="10px"
        bg={darkMode ? "gray.800" : "white"}
        overflow="hidden"
      >
        <Box className="c-bg"></Box>
        <Box className="c-wrapper">
          <Box className="c-left">
            <Heading
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
              style={{ color: "#59b256" }}
            >
              Contacts
            </Heading>
            <Box className="c-info">
              <Text borderBottom={"2px solid green"} display={"inline-block"}>
                Mobile No.
              </Text>
              <Box className="c-info-item">
                <FcPhone size="35px" />
                &nbsp;&nbsp;&nbsp;+62 81260051006
              </Box>
              <Text borderBottom={"2px solid green"} display={"inline-block"}>
                Mail Me.
              </Text>
              <Box className="c-info-item">
                <AiTwotoneMail size="35px" />
                &nbsp;&nbsp;&nbsp; eriksimaremare@gmail.com
              </Box>
              <Text borderBottom={"2px solid green"} display={"inline-block"}>
                Address.
              </Text>
              <Box className="c-info-item">
                <FcHome size="35px" />
                &nbsp;&nbsp;&nbsp; Depok, West Java,Indonesia
              </Box>
              <Box style={{ display: "flex", gap: "15px" }}>
                <Text>connect with me:</Text>
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
                    <a
                      href="https://www.linkedin.com/in/erik-lewis-979a9976/"
                      target="blank"
                    >
                      <BsLinkedin
                        size="2rem"
                        color={darkMode ? "white" : "green"}
                      />
                    </a>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          {isLargerThan ? null : <Divider my={"5"} />}
          <Box className="c-right" lineHeight={"2rem"}>
            <Text className="c-desc">
              <Button
                color={darkMode ? "white" : "green"}
                bg={darkMode ? "#59b256" : "white"}
                my={"3"}
              >
                say Hello
              </Button>
              <br />
              Hello! I am a Full Stack Web Developer. Seeking for new
              opportunity in software industry.
              <br />
              contact me via email.
              <br />
              Thank YOu
            </Text>

            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

            <form ref={form} onSubmit={sendEmail} className={"form"}>
              <Input
                fontSize={["xs", "sm", "md", "md"]}
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                name="user_name"
                placeholder="Your Name"
              />

              <Input
                fontSize={["xs", "sm", "md", "md"]}
                style={{ backgroundColor: darkMode && "#333" }}
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
              <Textarea
                fontSize={["xs", "sm", "md", "md"]}
                style={{ backgroundColor: darkMode && "#333" }}
                name="message"
                placeholder="Write Message"
              />
              <Tooltip label="click to send message">
                <Input
                  fontSize={["xs", "sm", "md", "md"]}
                  type="submit"
                  value="Send"
                  bg="#59b256"
                  w="50%"
                  color={"whitesmoke"}
                  _hover={{
                    color: "green",
                    bg: "none",
                  }}
                ></Input>
              </Tooltip>
              {done && (
                <Image src={ThankYou} w="100%" h="25vh" alt="thankyou" />
              )}
            </form>
          </Box>
        </Box>
        <Box m="0" p="0" w="100vw" pos="relative" l="0">
          <div className="kepala">
            <div className="badan">
              <div class="eye">
                <div class="iris">
                  <div class="pupil"></div>
                </div>
              </div>
              <div class="shadow"></div>
            </div>
          </div>
          <Box className="google_map" id="map">
            <iframe
              width="100%"
              height="500vh"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.526022122215!2d98.74459848801101!3d3.563505338349238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13917c1b6b484117!2zM8KwMzMnNDguNiJOIDk4wrA0NCc0Mi41IkU!5e0!3m2!1sid!2sid!4v1670324304023!5m2!1sid!2sid"
              loading="lazy"
              async
            />
          </Box>
        </Box>
      </Box>

      <Divider />
    </>
  );
};

export default Contact;
