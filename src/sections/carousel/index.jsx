import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

import { tokens } from "../../theme";
import { useEffect } from "react";
import { useTheme } from "@emotion/react";

const Carousel = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["100%", "-100%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  const items = [
    "/atcologo.png",
    "/flygrandsetlogo.png",
    "/karbaklogo.jpeg",
    "/caleb-logo.png",
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        overflow: "hidden", // Prevent horizontal scrolling
        width: "100%", // Full width of the parent container
        backgroundColor: colors.grey[800],
        height: isMobile ? "700px" : "500px",
        position: "relative",
        padding: "30px 0",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: colors.green[600],
          textAlign: "center", // Align title for better presentation
          marginBottom: 2,
        }}
      >
        Some Brands On Our Roaster
      </Typography>
      <motion.div
        style={{
          display: "flex",
          gap: "10px", // Adds spacing between items
          position: "absolute", // Allows it to animate within the container
        }}
        animate={controls}
      >
        {items.map((src, index) => (
          <Box
            key={index}
            sx={{
              width: "200px",
              height: "auto", // Adjust height based on content
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              //   overflow: "hidden", // Keeps images contained within boxes
            }}
          >
            <img
              src={src}
              alt={`Brand ${index + 1}`}
              style={{ width: "100px", height: "50px", padding: "10px 0" }}
            />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default Carousel;
