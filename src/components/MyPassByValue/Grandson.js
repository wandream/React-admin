import React, { useContext } from "react";

const themes = {
  light: {
    foreground: "#000",
    background: "#eee",
  },
  dark: {
    foreground: "#fff",
    background: "#222",
  },
};

// 创建 Context
const ThemeContext = React.createContext(themes.light);

const TestButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      hello
    </button>
  );
};

const ToolBar = () => {
  return (
    <ToolBar>
      <TestButton />
    </ToolBar>
  );
};

const Grandson = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ToolBar />
    </ThemeContext.Provider>
  );
};

export default Grandson;
