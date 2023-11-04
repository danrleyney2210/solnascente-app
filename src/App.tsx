import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import Rotas from "./routes";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Rotas />
    </ThemeProvider>
  );
}
