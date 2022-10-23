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
  useTheme,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Link as reactLink } from "react-scroll";

// type HomePageProps = {
//   summary: string;
//   about: string;
//   isMobile?: boolean;
// };

const Socials = [
  "https://www.linkedin.com/in/danny-lu/",
  "https://github.com/dannylu03",
  "https://devpost.com/dannylu03",
];

const HomePage: React.FC = () => {
  const theme = useTheme();
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
              <Heading size={"2xl"} color={theme.colors.clicked.main}>
                Hey, I&apos;m Danny!
              </Heading>
              <Text mt={4} fontSize="lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi suscipit accusamus dolorum culpa ullam sunt blanditiis
                nihil cupiditate consequuntur voluptate, error qui atque
                praesentium est quam non ipsum, repudiandae maiores!
              </Text>
              <HStack mt={10} mb={4}>
                {Socials.map((url, idx) => {
                  return (
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                      key={idx}
                    >
                      <SocialIcon
                        url={url}
                        target="_blank"
                        style={{ height: 50, width: 50 }}
                      />
                    </motion.div>
                  );
                })}
              </HStack>
              <Box mt={4}>
                <ButtonGroup gap="3">
                  <Button
                    bgColor={theme.colors.clicked.main}
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
                      color="white"
                    >
                      Get in touch
                    </Link>
                  </Button>
                  <Button
                    bgColor={theme.colors.clicked.main}
                    variant="outline"
                    width={{ base: "120px", sm: "200px" }}
                    p={0}
                  >
                    <Link
                      href="Danny_Lu_Resume.pdf"
                      width={"100%"}
                      color="white"
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
