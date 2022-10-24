import Link from "next/link";
import { useRouter } from "next/router";
import Socials from "../Socials/Socials";
import { NavbarContainer, Div1, Div2, NavLink } from "./NavBarStyles";

const NavBar = () => {
  const { route } = useRouter();

  return (
    <NavbarContainer sticky>
      {route === "/" ? (
        <Div1>
          <span style={{ display: "flex", alignItems: "center" }}>Danny</span>
        </Div1>
      ) : (
        <Div1>
          <Link href="/">
            <a style={{ display: "flex", alignItems: "center" }}>danny</a>
          </Link>
        </Div1>
      )}
      <Div2>
        <li>
          <Link href={route === "/projects" ? "/about" : "#about"}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === "/projects" ? "/#tech" : "#tech"}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <Socials />
    </NavbarContainer>
  );
};

export default NavBar;
