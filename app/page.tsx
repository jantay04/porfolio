"use client"

import About from "@/components/About";
import Experience from "@/components/Experience";
import MainLayout from "@/components/Layout/MainLayout";
import MainSection from "@/components/MainSection";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { Inter } from "next/font/google";
import Projects from "./projects";
import { Contacts } from "@mui/icons-material";

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    // primary: {
    //   light: '#757ce8',
    //   main: '#3f50b5',
    //   dark: '#002884',
    //   contrastText: '#fff',
    // },
    secondary: {
      light: 'black',
      main: 'black',
      dark: 'black',
      contrastText: 'black',
    },
  },
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <MainSection />
        <About />
        {/* <Skills /> */}
        <Experience />
        <Projects />
        <Contacts />
      </MainLayout>
    </ThemeProvider>
  );
}
