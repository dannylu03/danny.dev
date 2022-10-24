import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar/NavBar";
import { LayoutContainer } from "./LayoutStyles";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <NavBar />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 0.8 }}
      >
        {children}
      </motion.main>
    </LayoutContainer>
  );
};

export default Layout;
