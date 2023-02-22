import { createContext, useReducer } from 'react'
import AppReducer  from './AppReducer'


const initialState = {
  theme : 'light'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(AppReducer, initialState)

  const changeTheme = (event) => {
    let theme = event.target.innerText

  if(theme === 'light'){
    theme = 'dark'

  return dispatch({
    type: 'CHANGE_THEME',
    payload: theme
  })
  }

  if(theme === 'dark'){
    theme = 'light'

    return dispatch({
      type: 'CHANGE_THEME',
      payload: theme
    })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        changeTheme
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}