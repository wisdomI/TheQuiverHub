import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

// const socials = [
//   { title: "Github", image: "/icons/GitHub.svg", link: " " },
//   { title: "HTML", image: "/icons/HTML.svg" },
//   { title: "CSS", image: "/icons/CSS.svg" },
//   { title: "Node", image: "/icons/Node.svg" },
//   { title: "React", image: "/icons/React.svg" },
//   { title: "Javascript", image: "/icons/JavaScript.svg" },
//   { title: "MUI", image: "/icons/devicon_materialui.svg" },
//   { title: "Tailwind", image: "/icons/devicon_tailwindcss.svg" },
//   { title: "Typescript", image: "/icons/devicon_typescript.svg" },
//   { title: "Nextjs", image: "/icons/skill-icons_nextjs-light.svg" },
// ];

const MotionBox = motion(Box);
const TypoBox = motion(Typography);

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
};

const staggerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HeroSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionBox
      id="hero"
      variants={staggerVariant}
      initial="hidden"
      animate="visible"
      sx={{
        backgroundImage: 'url("Background_Intro.png")',
        backgroundSize: isMobile ? "cover" : "cover",
        backgroundRepeat: isMobile ? "repeat" : "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "30px" : "80px",
        padding: isMobile ? "80px 20px 0px 20px" : " 150px 100px 0",
      }}
    >
      {/* Text Content */}
      <MotionBox
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          width: isMobile ? "100%" : "50%",
          pb: "50px",
        }}
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        {/* Greeting */}
        <TypoBox variant={isMobile ? "h6" : "h2"} sx={{ textAlign: "left" }}>
          <span
            style={{
              color: `${colors.green[100]}`,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            The Quiver Hub
          </span>
        </TypoBox>

        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            width: isMobile ? "100%" : "100%",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <span style={{ color: `${colors.yellow[100]}`, fontStyle: "italic" }}>
            {" "}
            Comprehensive Digital Solutions for Business Growth.{" "}
          </span>{" "}
          At The Quiver Hub, we specialize in providing a wide range of digital
          services tailored to meet the unique needs of businesses, whether
          they’re startups or established enterprises. With a commitment to
          excellence and innovation, we help brands achieve visibility,
          streamline operations, and maximize their online potential.
        </Typography>

        {/* Social Tools */}
        {/* <MotionBox
          sx={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: colors.green[100],
              // fontWeight: "bold",
            }}
          >
            My Tool Box
          </Typography>

          <MotionBox
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {socials.map((e) => (
              <IconButton key={e.title}>
                <img
                  src={e.image}
                  alt={e.title}
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              </IconButton>
            ))}
          </MotionBox>
        </MotionBox> */}
      </MotionBox>

      {/* Avatar Image */}
      {/* <MotionBox
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        sx={{
          width: isMobile ? "100%" : "100%",
          height: isMobile ? "100%" : "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="profilephoto.png"
          alt="avatar"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </MotionBox> */}
    </MotionBox>
  );
};

export default HeroSection;
