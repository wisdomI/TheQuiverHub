import {
  Box,
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

const projects = [
  {
    id: 1,
    title: "KARBAK LTD",
    description:
      "The Quiver Hub is responsible for the continious management of Karbak Ltd's website and is responsible for meeting its I.T needs.",
    image: "KARBAK.png",
    link: "https://karbakltd.com/ ",
    modalDescription:
      "The Quiver Hub is responsible for the continious management of Karbak Ltd's website and is responsible for meeting its I.T needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sodales arcu. Phasellus suscipit nunc nulla, eget blandit nibh rhoncus sit amet. Nullam eget arcu pulvinar, commodo nisi ut, congue neque. Vestibulum pulvinar, ex ut ultrices ornare, tortor nulla sollicitudin orci, quis condimentum massa leo in mi. Nam eget justo libero. Donec eget luctus eros. Sed mollis venenatis nunc, nec finibus dolor dignissim aliquam. Nam tempus ante in enim euismod, a vulputate nulla bibendum. Sed nisi leo, facilisis in est sed, pharetra tincidunt lectus. Ut tempus vel turpis vitae imperdiet. Donec bibendum et ipsum ac laoreet. Quisque nec justo ut mi ullamcorper consequat in a est.",
  },
  {
    id: 1,
    title: "ATCO HOMES",
    description:
      "The Quiver Hub is responsible for the continious management of Atco Homes' website and is responsible for meeting its I.T needs.",
    image: "ATCO.png",
    link: "https://atcohomes.ng/",
    modalDescription:
      "The Quiver Hub is responsible for the continious management of Atco Homes' website and is responsible for meeting its I.T needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sodales arcu. Phasellus suscipit nunc nulla, eget blandit nibh rhoncus sit amet. Nullam eget arcu pulvinar, commodo nisi ut, congue neque. Vestibulum pulvinar, ex ut ultrices ornare, tortor nulla sollicitudin orci, quis condimentum massa leo in mi. Nam eget justo libero. Donec eget luctus eros. Sed mollis venenatis nunc, nec finibus dolor dignissim aliquam. Nam tempus ante in enim euismod, a vulputate nulla bibendum. Sed nisi leo, facilisis in est sed, pharetra tincidunt lectus. Ut tempus vel turpis vitae imperdiet. Donec bibendum et ipsum ac laoreet. Quisque nec justo ut mi ullamcorper consequat in a est.",
  },
];

const MotionBox = motion(Box);

const Projects = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [DialogComponent, openDialog] = useDialogModal(ProjectModal);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    openDialog();
  };

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
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
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
