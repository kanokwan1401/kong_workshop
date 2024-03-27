import { useState } from "react"

const FormComponent = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [errorUserName, setErrorUserName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('รหัสผ่านต้องมีจำนวนมากกว่า 8 ตัว')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('รหัสผ่านต้องตรงกัน')

  const [userNameColor, setUserNameColor] = useState('')
  const [emailColor, setEmailColor] = useState('')
  const [passwordColor, setPasswordColor] = useState('')
  const [comfirmPasswordColor, setComfirmPassworColor] = useState('')

  const validateForm = (e) => {
    e.preventDefault()

    if (userName.length >= 8) {
      setErrorUserName('')
      setUserNameColor('green')
    } else {
      setErrorUserName('กรุณาป้อนชื่อผู้ใช้มากกว่า 8 อักษร')
      setUserNameColor('red')
    }

    if (email.includes('@')) {
      setErrorEmail('')
      setEmailColor('green')
    } else {
      setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
      setEmailColor('red')
    }

    if (password.length >= 8) {
      setErrorPassword('')
      setPasswordColor('green')
    } else {
      setErrorPassword('กรุณาป้อนรหัสผ่านมากกว่า 8 ตัว')
      setPasswordColor('red')
    }

    if (confirmPassword != "" && confirmPassword === password) {
      setErrorConfirmPassword('')
      setComfirmPassworColor('green')
    } else {
      setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน')
      setComfirmPassworColor('red')
    }

  }


  return (
    <div className=" w-[80%] text-slate-500">
      <form onSubmit={validateForm} className=" font-sansThai text-[14px] font-semibold">
        <div className=" pb-4 relative">
          <label htmlFor="name" className=" block mb-[5px]">ชื่อผู้ใช้</label>
          <input className=" block border-[2px] rounded-lg border-slate-200 focus:outline-none p-[10px] w-[100%] text-[14px]" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ borderColor: userNameColor }} />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>

        <div className=" pb-4 relative">
          <label htmlFor="email" className=" block mb-[5px]">อีเมล</label>
          <input className=" block border-[2px] rounded-lg border-slate-200 focus:outline-none p-[10px] w-[100%] text-[14px]" type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: emailColor }} />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>

        <div className=" pb-4 relative">
          <label htmlFor="password">รหัสผ่าน</label>
          <input className=" block border-[2px] rounded-lg border-slate-200 focus:outline-none p-[10px] w-[100%] text-[14px]" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: passwordColor }} />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>

        <div className=" pb-4 relative">
          <label htmlFor="confirmpassword">ยืนยันรหัสผ่าน</label>
          <input className=" block border-[2px] rounded-lg border-slate-200 focus:outline-none p-[10px] w-[100%] text-[14px]" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ borderColor: comfirmPasswordColor }} />
          <small style={{ color: comfirmPasswordColor }}>{errorConfirmPassword}</small>
        </div>

        <div className=" flex justify-center pt-5">
          <button type="submit" className=" w-[80%] bg-gradient-to-r from-green-500 to-blue-600 p-3 text-[18px] text-white rounded-lg cursor-pointer">ลงทะเบียน</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent