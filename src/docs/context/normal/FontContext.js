import React, { useState } from "react";

const FontContext = React.createContext({
  state: { fontSize: "" },
  action: { setFontSize: () => {} },
});

const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("2rem");
  const value = {
    state: { fontSize },
    action: { setFontSize },
  };
  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

const FontContextConsumer = FontContext.Consumer;

export {FontSizeProvider, FontContextConsumer, FontContext} ;
