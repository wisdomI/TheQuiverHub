import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

// import Resume from "../../components/ResumeButton";

const socials = [
  {
    image: "/icons/InstagramLogo.svg",
    link: "https://www.instagram.com/big.que_?igsh=MWFtOXd1c2h4OWVyNQ%3D%3D&utm_source=qr",
  },
  {
    image: "/icons/EnvelopeSimple.svg",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
  },
  {
    image: "/icons/LinkedinLogo.svg",
    link: "https://www.linkedin.com/mwlite/in/ifeoluwa-odefadehan-30a674221",
  },
];

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        // backgroundColor: colors.grey[900],
        backdropFilter: "blur(10px)",
        width: "100%",
        height: "60px",
        position: "fixed",
        padding: "15px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
            },

            //   flexWrap: "wrap",
          }}
        >
          {socials.map((e) => (
            <IconButton
              sx={{
                "&:hover": {
                  color: colors.green[100],
                },
              }}
              key={e.title}
              href={e.link}
              target="blank"
            >
              <img
                src={e.image}
                alt=""
                style={{
                  height: "20px",
                  width: "20px",
                  // "&:hover": {
                  //   backgroundColor: colors.green[100],
                  // },
                }}
              />
            </IconButton>
          ))}
        </Box>
        {/* <Resume /> */}
      </Box>
    </Box>
  );
};

export default Header;
