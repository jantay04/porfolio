import About from '../components/About'
import Contacts from '../components/Contacts'
import Experience from '../components/Experience'
import MainLayout from '../components/Layout/MainLayout'
import MainSection from '../components/MainSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { motion, useScroll, useSpring } from "framer-motion";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google'
// import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
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
      <motion.div style={{
        scaleX: scaleX,
        transformOrigin: "left",
        background: "black",
        position: "sticky",
        top: '0',
        width: '100%',
        height: '6px'
      }} />
      <MainLayout>
        <MainSection />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </MainLayout>
    </ThemeProvider>
  );
}
