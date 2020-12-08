import React, { createContext, useContext, useState } from 'react'
import { GlobalContext } from '../pages/GlobalContext';
const MainJOb = createContext();

function MainJobProvider({job , children}) {
   const {state} = useContext(GlobalContext);
   const {response} = state;
   console.log(response);
   const [desc , setDesc] = useState([]);

   function showDescription (id) {
      const filters = response.filter( ids => ids.id === id);
      setDesc(filters)
   }
   console.log(desc);
  return (
    <MainJOb.Provider value={{job , showDescription , desc  }}>
      {children}
    </MainJOb.Provider>
  )
}

export {MainJOb , MainJobProvider}
