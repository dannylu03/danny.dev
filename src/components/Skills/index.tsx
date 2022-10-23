import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { iconColors } from "../../iconColors";
import { Skill } from "../../types/Skill";

type SkillsProps = {
  skills: Skill[];
};

const Technology: React.FC<Skill> = (props: Skill) => {
  const { name, Icon } = props;

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
          },
        },
        hidden: { opacity: 1, y: 80 },
      }}
    >
      <HStack width={"138px"} boxShadow="md" p="1.5" rounded="md">
        <Icon
          color={iconColors[name.replace(" ", "").toLowerCase()]}
          size={45}
        />
        <Text>{name}</Text>
      </HStack>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
  const { languages, frameworks, libraryTools } = props;
  const theme = useTheme();

  return (
    <>
      <Heading size={"xl"} textAlign={"left"} color={theme.colors.clicked.main}>
        Skills
      </Heading>
      <Stack
        mt={5}
        spacing={10}
        direction={{ base: "column", sm: "row" }}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontSize="lg">
            <Text as="b" color={theme.colors.clicked.main}>
              Languages
            </Text>{" "}
            I&apos;ve worked with
          </Text>
          <SimpleGrid
            columns={{ base: 2, sm: 3 }}
            spacing="6"
            p="5"
            pl={{ base: 4, sm: 0 }}
            textAlign="center"
            alignSelf={"start"}
          >
            {languages.map((language: Skill, idx: number) => {
              return (
                <Technology
                  key={idx}
                  name={language.name}
                  Icon={language.Icon}
                />
              );
            })}
          </SimpleGrid>
        </Box>
      </Stack>
      <Box mt={10}>
        <Text fontSize="lg">
          <Text as="b" color={theme.colors.clicked.main}>
            Frameworks
          </Text>{" "}
          I&apos;ve worked with
        </Text>
        <SimpleGrid
          columns={{ base: 3, sm: 5 }}
          spacing="6"
          p="5"
          pl={{ base: 5, sm: 0 }}
          textAlign="center"
          alignSelf={"start"}
        >
          {frameworks.map((framework: Skill, idx: number) => {
            return (
              <Technology
                key={idx}
                name={framework.name}
                Icon={framework.Icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>

      <Box mt={10}>
        <Text fontSize="lg">
          <Text as="b" color={theme.colors.clicked.main}>
            Libraries/Tools
          </Text>{" "}
          I&apos;ve worked with
        </Text>
        <SimpleGrid
          columns={{ base: 3, sm: 5 }}
          spacing="6"
          p="5"
          pl={{ base: 5, sm: 0 }}
          textAlign="center"
          alignSelf={"start"}
        >
          {libraryTools.map((libraryTools: Skill, idx: number) => {
            return (
              <Technology
                key={idx}
                name={libraryTools.name}
                Icon={libraryTools.Icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skills;
