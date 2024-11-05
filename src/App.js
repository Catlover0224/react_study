import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/theme";
import ParentContainer from "./docs/context/normal/ParentContainer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, World!
        <ParentContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
