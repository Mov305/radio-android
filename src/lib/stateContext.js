import React from 'react';

export const ThemeContext = React.createContext();

export default function StateContext(props) {
  const [dark, setDark] = React.useState(false);
  const toggleTheme = () => {
    setDark(!dark);
  };

  const context = {
    dark,
    toggleTheme,
  };

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
}
