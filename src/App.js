import "./App.css";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, tokens, useMode } from "./theme";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import Carousel from "./sections/carousel";
import CeoMessage from "./sections/testimonial";
import ContactSection from "./sections/contact";
import Header from "./sections/header";
import HeroSection from "./sections/hero";
import HireMe from "./components/hireMe";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";
import Services from "./sections/services";

// Component imports

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.2) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Main layout component
const MainLayout = ({ children, colors }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
    }}
  >
    {children}
  </Box>
);

// Navbar container component
const NavbarContainer = ({ colors }) => (
  <Box
    sx={{
      // backgroundColor: colors.grey[300],
      width: "46px",
      // borderRadius: "0 20px 0 0",
    }}
  >
    <Navbar />
  </Box>
);

const MotionBox = motion(Box);

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const { scrollYProgress: completionProgress } = useScroll();

  // Set document title
  useEffect(() => {
    document.title = "The Quiver Hub";
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MotionBox
          className="App"
          sx={{
            backgroundColor: colors.grey[300],
            display: "flex",
          }}
        >
          <NavbarContainer colors={colors} />
          <MainLayout colors={colors}>
            <Header />
            <HeroSection />
            <Projects />
            <Carousel />
            <Services />
            <CeoMessage />
            <ContactSection />
            <HireMe />
          </MainLayout>
        </MotionBox>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
