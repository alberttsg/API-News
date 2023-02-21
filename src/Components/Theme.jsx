import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'


export const Theme = ()=>{
    const { theme,changeTheme } = useContext(GlobalContext)

    return(
        <span id='theme-btn' onClick={changeTheme}>{theme}</span>
   )
}