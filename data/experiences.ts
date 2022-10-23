import { Experience } from "../src/types/Experience";
import {
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiJava,
  SiSpringboot,
} from "react-icons/si";

export const experiences: Experience[] = [
  {
    title: "Software Developer Intern",
    company: "Royal Bank of Canada",
    description:
      "Do tempor ut minim sint laboris commodo sint mollit do est sint veniam. Dolore enim ut nulla consequat cupidatat do in consequat ea. Veniam sit ex ullamco ut proident veniam fugiat. Ipsum est adipisicing enim consectetur ut consequat ex Lorem reprehenderit eu esse mollit. Dolor tempor consectetur amet laborum velit velit velit velit consequat enim elit anim amet. Cillum non sunt dolor velit minim. Enim qui incididunt in sint tempor occaecat eu dolore commodo cillum dolore.",
    image: "RBC_LOGO.svg",
    period: "May 2022 - Aug 2022",
    color: "#005DAA",
    technologies: [
      { name: "Angular", Icon: SiAngular },
      { name: "Java", Icon: SiJava },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Spring Boot", Icon: SiSpringboot },
    ],
  },
];
