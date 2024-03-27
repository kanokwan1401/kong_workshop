import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className=" w-full h-screen bg-indigo-950 flex flex-col items-center justify-center">
        <p className=" text-white font-mono font-bold text-[30px] pb-5"> Quiz Application🦕</p>
        <div className=" w-[400px] h-[500px] bg-indigo-200 rounded-2xl shadow-2xl flex items-center">
          {appState === "menu" && <Menu />}
          {appState === "quiz" && <Quiz />}
          {appState === "score" && <Score />}
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
