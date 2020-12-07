import React , { createContext, useReducer  , useEffect, useState} from 'react' 

const GlobalContext = createContext();
function  GlobalContextProvider({children}) {
  let [state, dispatch] = useReducer((state, action) => {
  switch(action.type) {
    case 'LOADING': {
      return { ...state, loading: true }
    }
    case 'RESOLVED': {
      return {
        ...state,
        loading: false,
        response: action.response,
        error: null
      
      }
    }
    case 'ERROR': {
      return {
        ...state,
        loading: false,
        response: action.response,
        error: action.error
      }
    }
    case "FILTERS_JOB" : {
      const filterJob = state.response.filter(job => {
        if(job.title === action.title) {
          return {
            ...state ,
            title : [...job , action.title]
          }
        }
        return job
      })
      return {
        ...state,
        response : filterJob,
      }
    }
    default:
      return state
  }
}, {
  loading: false,
  response:[],
  error: null
})
useEffect(() => {
  let isCurrent = true
  dispatch({ type: "LOADING" })
  const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&full_time=true&`;
  fetch(URL)
    .then(response => response.json())
    .then(json => {
      if (isCurrent) {
        dispatch({ type: "RESOLVED", response: json })
      }
    }).catch(error => {
      dispatch({ type: "ERROR", error })
    })
  return () => {
    isCurrent = false
  }
}, [])
console.log(state.response);

return <GlobalContext.Provider value = {{state , dispatch}}>{children}</GlobalContext.Provider>

}

export {GlobalContext , GlobalContextProvider}

