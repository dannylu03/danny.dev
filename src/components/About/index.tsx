import { Heading, Text, useTheme } from "@chakra-ui/react";
import React from "react";

type AboutProps = {
  description: string;
};

const About: React.FC<AboutProps> = (props: AboutProps) => {
  const theme = useTheme();

  return (
    <>
      <Heading size={"xl"} textAlign={"left"} color={theme.colors.clicked.main}>
        {"More About Me!"}
      </Heading>
      <Text mt={5} fontSize="lg">
        {props.description}
      </Text>
    </>
  );
};

export default About;
