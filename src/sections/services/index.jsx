import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const MotionBox = motion(Box);

const services = [
  {
    id: 1,
    title: "Social Media Management",
    // image: "/icons/Devices.svg",
    description:
      "We manage your social media presence across all major platforms, creating and curating engaging content that resonates with your audience. From content planning to scheduling, analytics, and community engagement, our team ensures your brand stays active, relevant, and memorable.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    image: "/icons/Devices.svg",
    description:
      " Our digital marketing services include everything from search engine optimization (SEO) and pay-per-click (PPC) advertising to email marketing and influencer partnerships. We focus on strategies that drive measurable results, helping you attract the right audience, increase conversions, and achieve your marketing goals.",
  },
  {
    id: 3,
    title: "Website Development and Maintenance",
    image: "/icons/HardDrives.svg",
    description:
      "We design and develop responsive, user-friendly websites that reflect your brand’s identity and provide a seamless experience for your users. Our maintenance services ensure your website stays up-to-date secure, and optimized for peak performance.",
  },
  {
    id: 4,
    title: "Content Creation and Management",
    image: "/icons/HardDrives.svg",
    description:
      " Content is at the heart of effective digital marketing. We create compelling blog posts, articles, product descriptions, and visual content that engage your audience and support your SEO strategy. With The Quiver Hub, your content consistently reflects your brand voice and keeps your audience informed and engaged.",
  },
  {
    id: 5,
    title: "Email Marketing Campaigns",
    image: "/icons/HardDrives.svg",
    description:
      "Email marketing remains one of the most effective ways to connect with your audience. We help you craft targeted email campaigns that nurture leads, retain customers, and boost sales. From design and content to analytics, our team covers every step of the process.",
  },
  {
    id: 6,
    title: "Brand Strategy and Consultation",
    image: "/icons/HardDrives.svg",
    description:
      " Our brand strategy services focus on building a clear and cohesive brand identity. We work with you to develop branding elements, identify target audiences, and create strategies that ensure brand consistency and recognition across all platforms.",
  },
  {
    id: 7,
    title: "Training and Support for Digital Tools",
    image: "/icons/HardDrives.svg",
    description:
      "We offer training sessions in areas like email migration, cPanel management, and social media strategy. Our goal is to empower your team with the skills they need to manage digital tasks confidently and effectively.",
  },
  {
    id: 8,
    title: "Data Analytics and Reporting",
    image: "/icons/HardDrives.svg",
    description:
      "Understanding your performance metrics is key to refining your strategy. We provide data-driven insights and reports to track your digital efforts, evaluate results, and guide future campaigns. Our analytics help you make informed decisions to boost ROI and drive growth.  Why Choose The Quiver Hub? With our personalized approach and dedication to client success, we position your business for growth in today’s digital landscape. Our experienced team stays updated on the latest industry trends and technologies, ensuring you receive cutting-edge solutions that meet your goals.",
  },
];

const Services = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <MotionBox
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      id="services"
      sx={{
        padding: isMobile ? "50px 0" : "120px 0",
        backgroundColor: `${colors.grey[800]}`,
        width: "100%",
        gap: "25px ",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MotionBox
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        // viewport={{ once: false, amount: 0.7 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: colors.yellow[100],
            mb: "20px",
          }}
        >
          SERVICES
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.green[100],
            mb: "20px",
          }}
        >
          Our Core Services:
        </Typography>
        <MotionBox
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          // viewport={{ once: false, amount: 0.9 }}
          sx={{
            gap: "15px ",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {services.map((services, index) => {
            return (
              <Card
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "top",
                  textAlign: "left",
                  height: isMobile ? "250px" : "150px",
                  // backgroundColor: colors.grey[400],
                  // border: `1px solid ${colors.grey[300]}`,
                  width: isMobile ? "250px" : "310px",
                  height: "300px",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {/* <img
                    src={services.image}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "15px",
                    }}
                  /> */}
                  <Typography
                    variant="h6"
                    sx={{
                      color: colors.yellow[100],
                      fontWeight: "900",
                      padding: "5px 0",
                    }}
                  >
                    {services.title}
                  </Typography>
                  <Typography variant="body2">
                    {services.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
          <Typography variant="body2" p="20px">
            Let The Quiver Hub be your partner in achieving digital excellence.
            Reach out to us today to discuss how we can help you take your brand
            to the next level!
          </Typography>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default Services;
