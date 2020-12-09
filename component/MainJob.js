import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from '../pages/GlobalContext';
const MainJOb = createContext();

function MainJobProvider({job , children}) {
   const {state} = useContext(GlobalContext);
   const {response} = state;

  return (
    <MainJOb.Provider value={{job}}>
      {children}
    </MainJOb.Provider>
  )
}

export {MainJOb , MainJobProvider}
