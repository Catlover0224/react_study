import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/theme";
import FontContainer from "./pages/docs/font/FontContainer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, World!
        <FontContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
