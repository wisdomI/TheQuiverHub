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
      "As the trusted digital partner for Stomfits, The Quiver Hub...",
    image: "Stomfits-socials.png",
    link: "https://stomfits.com/",
    modalDescription:
      "As the trusted digital partner for Stomfits, The Quiver Hub executed innovative marketing strategies to amplify the brand’s appeal. From launching new collections with visually striking campaigns to managing influencer collaborations, we ensured Stomfits’ modern, stylish identity was front and center. By implementing performance-driven ad strategies and creating engaging content, we contributed to consistent audience growth, enhanced sales, and strengthened the brand’s overall digital presence.",
  },
  {
    id: 1,
    title: "YEMITE PROPERITIES",
    description: "The Quiver Hub collaborated with Yemite Properties...",
    image: "yemite.png",
    link: "#",
    modalDescription:
      "The Quiver Hub collaborated with Yemite Properties to enhance its online footprint and drive property inquiries. By crafting visually appealing posts and running hyper-targeted ad campaigns, we successfully connected the brand with its ideal audience. We focused on showcasing their properties’ unique value while maintaining a professional and consistent tone across all social platforms. Our efforts resulted in increased visibility, higher engagement, and measurable growth for Yemite Properties.",
  },
  {
    id: 2,
    title: "ATCO HOMES SOCIALS",
    description: "Atco Homes partnered with The Quiver Hub to revamp its...",
    image: "ATCO.png",
    link: "https://atcohomes.ng/",
    modalDescription:
      "Atco Homes partnered with The Quiver Hub to revamp its digital marketing efforts and social media strategy. We developed content strategies tailored to the real estate market, highlighting Atco Homes’ exceptional properties and fostering trust with potential clients. Through consistent branding, storytelling, and data-driven ad campaigns, we not only increased online inquiries but also established Atco Homes as a top name in the real estate industry. The Quiver Hub’s expertise brought measurable growth and a professional edge to their digital presence.",
  },
  {
    id: 4,
    title: "FLYGRANDEST",
    description: "The Quiver Hub was contracted to handle..",
    image: "flygrandest-socials.png",
    link: "https://www.flygrandest.com/",
    modalDescription:
      "The Quiver Hub was contracted to handle the digital marketing and social media management for Flygrandest. Our approach was to elevate the brand’s identity through dynamic and engaging content that resonated with its vibrant audience. By implementing targeted ad campaigns, we boosted brand visibility and built an engaged community across platforms. Our performance tracking ensured continuous optimization, leading to increased reach, audience engagement, and improved conversions. Flygrandest now stands out as a brand with a bold and consistent digital presence.",
  },
  {
    id: 4,
    title: "KOKO'S DELIGHT",
    description:
      "For Koko’s Delight, The Quiver Hub was tasked with creating...",
    image: "kokosdelight-socials.png",
    link: "https://www.instagram.com/koko_delight_/",
    modalDescription:
      "For Koko’s Delight, The Quiver Hub was tasked with creating a captivating digital presence that reflected the brand’s cultural vibrancy. We developed interactive content, seasonal campaigns, and customer-focused promotions to increase engagement and sales. Our team also managed their advertising efforts, ensuring cost-effective strategies that delivered results. By consistently optimizing campaigns and fostering community interaction, we solidified Koko’s Delight as a standout name in the food industry.",
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
