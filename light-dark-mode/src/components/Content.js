import light from '../image/light.svg'
import dark from '../image/dark.svg'

const Content = () => {
  return (
    <main className=' w-[1280px] h-[600px] flex items-center bg-stone-700/30 p-9 rounded-3xl shadow-2xl text-center'>
      <div>
        <p className=" text-[60px] text-amber-50 font-extrabold">KANOKWANs.🌟</p>
        <p className=" text-[30px] text-amber-400">DarkMode Workshop</p>
      </div>
      <img src={dark} alt="Logo" className=' w-[850px]'/>
    </main>
  )
}

export default Content