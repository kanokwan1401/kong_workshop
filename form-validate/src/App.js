import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div className=' w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center '>
      <div className=' w-[500px] h-[700px] bg-white rounded-[24px] shadow-xl flex flex-col items-center justify-center'>
        <p className=' font-bold font-sansThai text-[30px] pb-2'>แบบฟอร์มลงทะเบียน</p>
        <FormComponent/>
      </div>
    </div>
  );
}

export default App;
