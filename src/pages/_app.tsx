import withDarkMode, { useDarkMode } from "next-dark-mode";
import type { AppProps as PageProps } from "next/app";
import { lightTheme, darkTheme } from "../themes/main";
import { ThemeProvider } from "styled-components";
import Styles from "../styles/styles";

const Portfolio = ({ Component, pageProps }: PageProps) => {
  const { darkModeActive } = useDarkMode();
  const theme = darkModeActive ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={{ darkMode: darkModeActive, ...theme }}>
        <Styles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default withDarkMode(Portfolio);
