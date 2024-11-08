import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/theme";
import ParentContainer from "./docs/context/normal/ParentContainer";
import AnimalsContainer from "./docs/context/expert/AnimalsContainer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Hello, World!
        <AnimalsContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
