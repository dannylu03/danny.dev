import { Experience, Technology } from "../../types/Experience";
import { motion } from "framer-motion";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  theme,
  useColorModeValue,
  useTheme,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { iconColors } from "../../iconColors";

type CardProps = {
  experience: Experience;
  minHeight: number;
};

const Card: React.FC<CardProps> = ({
  experience: {
    title,
    company,
    image,
    description,
    period,
    color,
    technologies,
    link,
  },
  minHeight,
}: CardProps) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      animate={{ transition: { type: "spring", duration: 0.1 } }}
    >
      <Center py={6} w={"full"}>
        <Flex
          maxW={"400px"}
          w={"100%"}
          h={"100%"}
          bg="white"
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          minHeight={{ base: 0, sm: `${minHeight}px` }}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>
            <Center h={"100px"} w={"full"} bgColor={color} />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={image}
                name={company}
                objectFit={"cover"}
                bg="white"
                boxShadow={"xl"}
              />
            </Flex>

            <Box py={3} px={4}>
              <Stack spacing={0} mb={3}>
                <Heading
                  fontSize={"xl"}
                  mb={1}
                  color={theme.colors.clicked.main}
                >
                  {company}
                </Heading>
                <Heading
                  as="i"
                  fontSize={"lg"}
                  fontWeight={500}
                  fontFamily={"body"}
                >
                  {title}
                </Heading>
                <Text as="i" fontSize={"xs"}>
                  {period}
                </Text>
                <Text fontSize={"sm"} color="black" pt={1}>
                  {description}
                </Text>
              </Stack>
              <Wrap mb={2}>
                {technologies.map((techno: Technology, index: number) => (
                  <WrapItem key={index}>
                    <Tag size={"sm"} variant={"subtle"} px={2} py={1}>
                      <TagLeftIcon boxSize="30px">
                        <techno.Icon size={24}></techno.Icon>
                      </TagLeftIcon>
                      <TagLabel ml="0">{techno.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Box>
          {link && (
            <Flex align={"self-end"} alignSelf="flex-end" py={3} px={4}>
              <Spacer />
              <Box>
                <Link href={link} isExternal>
                  <Text fontSize="sm" color={"blue.400"}>
                    Take a look <ExternalLinkIcon />
                  </Text>
                </Link>
              </Box>
            </Flex>
          )}
        </Flex>
      </Center>
    </motion.div>
  );
};
export default Card;
