import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyle from "./global/globalStyle";
import theme from "./global/theme";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
