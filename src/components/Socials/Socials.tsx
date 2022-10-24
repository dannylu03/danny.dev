import { SocialContainer, Icons } from "./SocialStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const socials = [
  {
    href: "https://github.com/dannylu03",
    title: "Visit my Github",
    SocialIcon: AiFillGithub,
  },
  {
    href: "https://www.linkedin.com/in/danny-lu/",
    title: "Connect with me on Linkedin",
    SocialIcon: AiFillLinkedin,
  },
];

type IconProps = {
  href: string;
  title: string;
  SocialIcon: any;
};

const Icon = ({ href, title, SocialIcon }: IconProps) => {
  return (
    <Icons href={href} title={title} target="_blank" rel="noopener noreferrer">
      <SocialIcon size="3rem" />
    </Icons>
  );
};

const Socials = ({ inFooter }: any) => {
  return (
    <SocialContainer inFooter={inFooter}>
      {socials.map((social, idx) => {
        return (
          <Icon
            key={idx}
            href={social.href}
            title={social.title}
            SocialIcon={social.SocialIcon}
          />
        );
      })}
    </SocialContainer>
  );
};

export default Socials;
