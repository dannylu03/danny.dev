import { ThemeProvider } from "styled-components";

import theme from "../themes/main";
import Styles from "./styles";

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <Styles />
    {children}
  </ThemeProvider>
);

export default Theme;
