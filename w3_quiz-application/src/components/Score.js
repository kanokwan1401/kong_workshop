import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext)

  const restartApp = () => {
    setScore(0)
    setAppState("menu")
  }

  return (
    <div className=" w-full flex flex-col items-center">
      <div
        className=" text-[30px] font-mono font-bold text-indigo-950 pb-3">
        Your Score🥳
      </div>
      <div className=" w-[60%] h-16 bg-white rounded-xl border-[2px] border-indigo-950 flex items-center justify-center">
        <p className=" font-mono font-bold text-[30px]">
          {score} / {QuestionsData.length}
        </p>
      </div>
      <button className=" bg-indigo-900 text-white font-sansThai p-2 rounded-full px-5 mt-5 hover:bg-indigo-600" 
      onClick={restartApp}>
        ทำแบบทดสอบอีกครั้ง
      </button>
    </div>

  )
}

export default Score