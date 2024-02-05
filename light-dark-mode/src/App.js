import Title from "./components/Title";
import Content from "./components/Content";
import { createContext, useState } from "react";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("dark🌕")

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className=" w-full flex flex-col items-center h-screen bg-stone-800 font-mono ">
        <div className=" w-full pt-2 px-5">
          <Title />
        </div>
        <div className=" pt-14">
          <Content />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
