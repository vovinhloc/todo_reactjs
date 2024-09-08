import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
export const AppContext=createContext({});
export default function AppProvider({children}) {
    const [categorySelectedId, setCategorySelectedId] = useState()
  return (
    <AppContext.Provider value={{categorySelectedId,setCategorySelectedId}}>
        {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes={
    children:PropTypes.element
}

export const useAppContext=()=>{
  return useContext(AppContext);
}