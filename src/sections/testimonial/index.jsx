import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Susan Alphonsus",
//     feedback:
//       "Working with Wisdom was an absolute pleasure. His attention to detail and the creativity he brought to the project were unmatched.",
//     role: "CEO, GreenShift",
//     // image: "john-doe.png",
//   },
//   {
//     id: 2,
//     name: "Oluwadara Ajao",
//     feedback:
//       "Wisdom’s ability to solve complex problems and meet deadlines made our project a huge success. I highly recommend him!",
//     role: "CTO, GreenShift",
//     // image: "jane-smith.png",
//   },
//   {
//     id: 3,
//     name: "Emmy Walka",
//     feedback:
//       "A highly skilled developer! Wisdom was able to bring our vision to life with his exceptional frontend skills.",
//     role: "CEO, WalkaArts",
//     // image: "mike-johnson.png",
//   },
// ];

const MotionBox = motion(Box);

const CeoMessage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MotionBox
      id="testimonial"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      sx={{
        padding: isMobile ? "30px 10px" : "100px 0", // Reduced padding for mobile
        backgroundColor: `${colors.grey[400]}`,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: colors.yellow[100],
        }}
      >
        SPECIAL MESSAGE
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: colors.green[100],
        }}
      >
        Message from the CEO/GMD
      </Typography>

      <Typography
        sx={{
          padding: "10px 40px",
        }}
      >
        I’m Ifeoluwa Aquila Odefadehan, the CEO and Group Managing Director of
        The Quiver Hub. Leading a team of dedicated professionals, I am
        committed to helping businesses harness the power of digital solutions
        to reach new heights. With a background in Computer Science and a
        specialization in Cyber Security, I bring a deep understanding of both
        technology and strategy, enabling us to provide effective, secure, and
        innovative digital services. At The Quiver Hub, we are driven by a
        passion for delivering results and building meaningful, lasting
        relationships with our clients. Whether it’s social media management,
        web development, content creation, or digital marketing, our goal is to
        empower brands to thrive in the digital landscape. I look forward to
        exploring how we can support your business with solutions tailored to
        your vision and goals. Warm regards, Ifeoluwa Aquila Odefadehan CEO/GMD,
        The Quiver Hub
      </Typography>
    </MotionBox>
  );
};

export default CeoMessage;
