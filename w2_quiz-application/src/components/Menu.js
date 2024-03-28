import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
  const { setAppState } = useContext(DataContext)

  return (
    <div className=" w-full flex flex-col items-center">
      <div
        className=" text-[30px] font-bold text-indigo-950 pb-3 font-sansThai">
        แบบทดสอบ👇
      </div>
      <button
        className=" bg-indigo-900 font-sansThai text-white p-3 rounded-xl w-[80%] text-[18px] hover:bg-indigo-600"
        onClick={() => setAppState('quiz')}>
        เริ่มทำแบบทดสอบ
      </button>
    </div>

  )
}

export default Menu