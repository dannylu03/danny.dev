import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import { experiences } from "../../data/experiences";
import About from "../components/About";

const description =
  "Currently, I’m working @ VISEO as a front-end developer, I live in Grenoble France, with more than 4 years of professional experience I transform ideas into reality using JS, with latest technologies such as React.js, Node.js, Next.js, Redux, Angular2+, I care about code readability and maintainability and actively I use linters and code analysis tools like Prettier, ESLint, StyleLint, I find happiness in being a better me today than I was yesterday. Scroll down to see some of the projects I've been working on.";

const links = [
  {
    name: "About",
    route: "about",
  },
  {
    name: "Projects",
    route: "projects",
  },
  {
    name: "Skills",
    route: "skills",
  },
  {
    name: "Contact",
    route: "contact",
  },
];

const Index: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)", { ssr: false });

  return (
    <>
      <NavBar links={links} />
      <Container as="main" maxW="100%" centerContent>
        <HomePage />
        <Container maxW="6xl" centerContent>
          <Box id="about">
            <About description={description} />
          </Box>
          <Box id="projects" mt={12}>
            <Experience experiences={experiences} />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Index;
