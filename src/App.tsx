import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import Rotas from "./routes";
import { defaultTheme } from "./styles/theme/default";

import { GoogleOAuthProvider } from "@react-oauth/google";

export function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Rotas />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}
