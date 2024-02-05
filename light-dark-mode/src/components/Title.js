import React, { Component, useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleSwitch = (checked) => {
    setTheme(
      theme === "dark🌕" ? "light☀️" : "dark🌕"
    )
    
  }

  return (
    <header className=" w-auto h-[50px] bg-stone-700/70 rounded-full flex items-center justify-center dark:bg-red-500">
      <span
        className=" w-[1280px] flex justify-between">
        <p className=" text-amber-600 font-museoModerno font-bold text-[25px]">
          Mode | {theme}
        </p>
        <div className=" pt-2">
          <Switch
            onChange={toggleSwitch}
            checked={theme === "light☀️"}
          />
        </div>
      </span>
    </header>
  )
}

export default Title