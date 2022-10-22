import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as reactLink } from "react-scroll";

// type HomePageProps = {
//   summary: string;
//   about: string;
//   isMobile?: boolean;
// };

const HomePage: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      w={"100%"}
      height={"100vh"}
      bgImage={
        colorMode === "dark" ? "/background-dark.png" : "/background-white.png"
      }
      bgRepeat="no-repeat"
    >
      <Container pt={{ base: 20, sm: 36 }} pb={28} maxW="6xl" centerContent>
        <Flex flexDir={{ base: "column", sm: "row" }} alignItems={"center"}>
          <Box flex={1} mr={{ base: 0, sm: 10 }} mt={{ base: 12, sm: 0 }}>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0, transition: { type: "spring" } }}
            >
              <Heading size={"2xl"}>Hi👋, I&apos;m Danny!</Heading>
              <Text mt={2} fontSize="lg">
                {/* {props.summary} */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi suscipit accusamus dolorum culpa ullam sunt blanditiis
                nihil cupiditate consequuntur voluptate, error qui atque
                praesentium est quam non ipsum, repudiandae maiores!
              </Text>
              <HStack mt={2}>
                <div>Socials</div>
                {/* <Socials socials={props.socials} /> */}
              </HStack>
              <Box mt={4}>
                <ButtonGroup gap="3">
                  <Button
                    colorScheme="cyan"
                    variant="solid"
                    width={{ base: "120px", sm: "200px" }}
                    p={0}
                  >
                    <Link
                      as={reactLink}
                      to={"contact"}
                      spy={true}
                      smooth={true}
                      py={1}
                      borderRadius={"lg"}
                      offset={-75}
                      width={"100%"}
                    >
                      Get in touch
                    </Link>
                  </Button>
                  <Button
                    colorScheme="cyan"
                    variant="outline"
                    width={{ base: "120px", sm: "200px" }}
                    p={0}
                  >
                    <Link
                      href="hafid_ziti_resume.pdf"
                      width={"100%"}
                      isExternal
                    >
                      Resume
                    </Link>
                  </Button>
                </ButtonGroup>
              </Box>
            </motion.div>
          </Box>

          <Box
            flex={1}
            flexShrink={"unset"}
            flexGrow={1}
            ml={{ base: 0, sm: 10 }}
            mt={{ base: 2, sm: 0 }}
          >
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0, transition: { type: "spring" } }}
            >
              <Image
                src="/pfp.png"
                alt="illustration"
                width={{ base: "344px", sm: "100%" }}
                height={{ base: "259px", sm: "100%" }}
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HomePage;
