import { Box, Container, Heading, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import { experiences } from "../../data/experiences";
import About from "../components/About";
import Skills from "../components/Skills";
import { skills } from "../../data/skills";
import Languages from "../../data/Languages";
import Frameworks from "../../data/Frameworks";
import LibrariesTools from "../../data/LibrariesTools";

const description =
  "Voluptate ullamco ex consequat ad consectetur. Ad non et ullamco cillum in duis do ipsum occaecat duis duis irure. Ad dolore laboris ea commodo reprehenderit nisi mollit ullamco officia consequat cillum culpa nulla.";
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
        <Container maxW="6xl" mt={-12} centerContent>
          <Box id="about">
            <About description={description} />
          </Box>
          <Box id="projects" mt={12}>
            <Experience experiences={experiences} />
          </Box>
          <Box id="skills" width={"100%"} mt={12}>
            <Skills
              languages={Languages}
              frameworks={Frameworks}
              libraryTools={LibrariesTools}
            />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Index;
