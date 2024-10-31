import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import Styled03 from "./pages/docs/component/Styled03";
import theme from "./global/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, World!
        <Styled03 />
      </ThemeProvider>
    </div>
  );
}

export default App;
