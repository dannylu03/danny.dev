import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Experience } from "../../types/Experience";
import Card from "../Card";

type ExperienceProps = {
  experiences: Experience[];
};

const Experience: React.FC<ExperienceProps> = (props: ExperienceProps) => {
  const { experiences } = props;
  const theme = useTheme();

  return (
    <>
      <Heading size={"xl"} color={theme.colors.clicked.main} textAlign={"left"}>
        Work Experiences
      </Heading>
      <Text fontSize="lg" mt={5}>
        Here is a timeline of my professional experiences!
      </Text>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        animate={{ transition: { type: "spring", duration: 0.1 } }}
      >
        <Box mt={4} textAlign={{ base: "left", sm: "center" }}></Box>
      </motion.div>

      <SimpleGrid columns={[1, 2, 3]} spacingX={12}>
        {experiences.map((experience: Experience, idx: number) => {
          const minHeight = idx > 2 ? 537 : 614;
          return (
            <GridItem key={idx}>
              <Card experience={experience} minHeight={minHeight} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Experience;
