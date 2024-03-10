import { StyleSheet, Text, View } from 'react-native'
import React, { createContext ,useState} from 'react'

export const ChangeDarkMode = createContext();

export default function ThemeProvider({children}) {
    const [darkMode, setDarkMode ]=useState(false)

    const HandleMode=()=>{
        setDarkMode((prev)=>!prev)
    }
  return (
    <ChangeDarkMode.Provider value={{darkMode,HandleMode}}>
{children}
    </ChangeDarkMode.Provider>
  )
}

const styles = StyleSheet.create({})