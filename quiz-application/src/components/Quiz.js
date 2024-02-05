import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [selectChoice, setSelectChoice] = useState("")
  const { score, setScore, setAppState } = useContext(DataContext)

  useEffect(() => {
    checkAnswer()
    // eslint-disable-next-line
  }, [selectChoice])

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1)
        nextQuestion()
      } else {
        nextQuestion()
      }
    }
  }

  const nextQuestion = () => {
    setSelectChoice("")
    if (current === QuestionsData.length - 1) {
      setAppState("score")
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className=" w-full flex flex-col items-center">
      <div
        className=" w-[80%] text-center text-[25px] font-sansThai font-bold text-indigo-950 pb-9 ">
        {QuestionsData[current].question}
      </div>

      <button className=" w-[80%] h-12 bg-white rounded-xl text-[16px] font-sansThai hover:border-[2px] hover:border-indigo-950 text-center mb-4 font-medium"
        onClick={() => setSelectChoice("A")}>
        {QuestionsData[current].A}
      </button>
      <button className=" w-[80%] h-12 bg-white rounded-xl text-[16px] font-sansThai hover:border-[2px] hover:border-indigo-950 text-center mb-4 font-medium"
        onClick={() => setSelectChoice("B")}>
        {QuestionsData[current].B}
      </button>
      <button className=" w-[80%] h-12 bg-white rounded-xl text-[16px] font-sansThai hover:border-[2px] hover:border-indigo-950 text-center mb-4 font-medium"
        onClick={() => setSelectChoice("C")}>
        {QuestionsData[current].C}
      </button>
      <button className=" w-[80%] h-12 bg-white rounded-xl text-[16px] font-sansThai hover:border-[2px] hover:border-indigo-950 text-center mb-4 font-medium"
        onClick={() => setSelectChoice("D")}>
        {QuestionsData[current].D}
      </button>

      <p className=" font-mono font-bold pt-5 text-[14px]">
        {`${current + 1} / ${QuestionsData.length}`}
      </p>

    </div>
  )
}

export default Quiz