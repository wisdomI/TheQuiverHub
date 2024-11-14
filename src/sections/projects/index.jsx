import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";

import ProjectModal from "./projectModal";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import { tokens } from "../../theme";
import { useDialogModal } from "../../hooks/useDialougeModal";
import { useTheme } from "@emotion/react";

const webProjects = [
  {
    id: 1,
    title: "KARBAK LTD",
    description: "The Quiver Hub designed, developed, and now...",
    image: "KARBAK.png",
    link: "https://karbakltd.com/",
    modalDescription:
      "The Quiver Hub designed, developed, and now manages the website for Karbak Ventures Limited, a distinguished construction company. From the ground up, we built a modern, user-friendly site that showcases Karbak Ventures' expertise and services. Our team also handles all backend configurations, ensuring that the site remains secure, efficient, and fully optimized for peak performance. This comprehensive service provides Karbak Ventures with a reliable online presence that enhances their brand visibility and supports seamless client engagement.",
  },
  {
    id: 2,
    title: "ATCO HOMES",
    description: "The Quiver Hub successfully created and...",
    image: "ATCO.png",
    link: "https://atcohomes.ng/",
    modalDescription:
      "The Quiver Hub successfully created and now manages the website for ATCO Homes, a leading real estate company. We designed an intuitive, user-friendly site that effectively showcases ATCO Homes’ properties, services, and brand vision. Through ongoing website management, we ensure optimal performance, security, and content updates that keep the site engaging and informative for prospective clients. This digital presence has enhanced ATCO Homes' visibility and streamlined their online client interactions, supporting their growth in the real estate market.",
  },
  {
    id: 4,
    title: "ENG. EMMANUEL PORTFOLIO",
    description: "The Quiver Hub successfully created and...",
    image: "Eng. Emmanuel.png",
    link: "https://emmanuel-nine.vercel.app/",
    modalDescription:
      "The Quiver Hub created to content that forms the subject portfolio. The Quiver Hub also collaborated development-wise in birthing the portfolio. Engineer Emmanuel's portfolio showcases his expertise as a mechanical engineer, highlighting his projects, skills, and accomplishments. Built with ReactJS, the portfolio features a sleek, user-friendly design that emphasizes his innovative engineering solutions and technical proficiency. Visitors can explore his work and insights, reflecting his commitment to excellence in mechanical engineering",
  },
  {
    id: 3,
    title: "STOMFITS",
    description: "The Quiver Hub not only manages the backend...",
    image: "STOMFIT.png",
    link: "https://stomfits.com/",
    modalDescription:
      "The Quiver Hub not only manages the backend for Stomfits but also oversees their digital marketing and social media strategies. Our backend management ensures a secure, high-performing platform for Stomfits' e-commerce operations, while our digital marketing and social media efforts drive brand visibility and engagement. We create targeted marketing campaigns, manage content across social platforms, and engage with Stomfits’ audience to boost online presence and customer loyalty. This comprehensive approach supports Stomfits in building a consistent, impactful brand identity and an effortless shopping experience for their customers.",
  },
];

const smDigitalProjects = [
  {
    id: 3,
    title: "STOMFITS SOCIALS",
    description:
      "The Quiver Hub not only manages the backend for Stomfits but also oversees their digital marketing and social media strategies...",
    image: "Stomfits-socials.png",
    link: "https://stomfits.com/",
    modalDescription:
      "The Quiver Hub not only manages the backend for Stomfits but also oversees their digital marketing and social media strategies. Our backend management ensures a secure, high-performing platform for Stomfits' e-commerce operations, while our digital marketing and social media efforts drive brand visibility and engagement. We create targeted marketing campaigns, manage content across social platforms, and engage with Stomfits’ audience to boost online presence and customer loyalty. This comprehensive approach supports Stomfits in building a consistent, impactful brand identity and an effortless shopping experience for their customers.",
  },
  {
    id: 1,
    title: "KARBAK LTD SOCIALS",
    description: "Responsible for Karbak Ltd's website management.",
    image: "KARBAK.png",
    link: "https://karbakltd.com/",
    modalDescription: "Detailed description about Karbak Ltd project.",
  },
  {
    id: 2,
    title: "ATCO HOMES SOCIALS",
    description: "Managed the Atco Homes website.",
    image: "ATCO.png",
    link: "https://atcohomes.ng/",
    modalDescription: "Detailed description about Atco Homes project.",
  },
];

const MotionBox = motion(Box);

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [DialogComponent, openDialog] = useDialogModal(ProjectModal);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toggleState, setToggleState] = useState(1); // 1 for Web Projects, 2 for SM & Digital Marketing

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    openDialog();
  };

  const currentProjects = toggleState === 1 ? webProjects : smDigitalProjects;

  return (
    <MotionBox
      id="projects"
      sx={{
        padding: isMobile ? "50px 0" : "100px 0",
        backgroundColor: `${colors.grey[400]}`,
        width: "100%",
        display: "flex",
        gap: "25px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MotionBox
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: colors.yellow[100],
          }}
        >
          PORTFOLIO
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.green[100],
            mb: "20px",
          }}
        >
          A list of projects we've worked on and are currently working on
        </Typography>

        {/* Mini Navigation */}
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            mb: "20px",
            justifyContent: "center",
          }}
        >
          <Button
            variant={toggleState === 1 ? "contained" : "outlined"}
            onClick={() => setToggleState(1)}
            sx={{
              color: toggleState === 1 ? colors.grey[100] : colors.blue[100],
              backgroundColor:
                toggleState === 1 ? colors.green[100] : "inherit",
            }}
          >
            Web Projects
          </Button>
          <Button
            variant={toggleState === 2 ? "contained" : "outlined"}
            onClick={() => setToggleState(2)}
            sx={{
              color: toggleState === 2 ? colors.grey[100] : colors.blue[100],
              backgroundColor:
                toggleState === 2 ? colors.green[100] : "inherit",
            }}
          >
            SMM & Digital Marketing
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentProjects.map((project, index) => (
            <MotionBox
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Card
                sx={{
                  borderRadius: "2px",
                  backgroundColor: colors.grey[900],
                }}
              >
                <CardContent
                  sx={{
                    height: isMobile ? "330px" : "300px",
                    width: isMobile ? "250px" : "350px",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "150px",
                      width: isMobile ? "200px" : "300px",
                      borderRadius: "1px",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: colors.blue[100],
                      fontWeight: "900",
                      padding: "15px 0",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.blue[100], cursor: "pointer" }}
                    onClick={() => handleLearnMore(project)}
                  >
                    Learn More...
                  </Typography>
                </CardContent>
              </Card>
            </MotionBox>
          ))}
        </Box>

        {/* Render the modal */}
        <DialogComponent project={selectedProject} />
      </MotionBox>
    </MotionBox>
  );
};

export default Projects;
