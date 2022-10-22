import { Container, useMediaQuery } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";

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
      <Container as="main" maxW="100%" p={0} centerContent>
        {/* <div>Hi</div> */}
        <HomePage />
      </Container>
    </>
  );
};

export default Index;
