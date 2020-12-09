import React, { createContext, useReducer, useEffect, useState } from 'react'

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
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
      case "LOCATION" : {
        let value = action.value
        const filterLocations = state.response.filter(job => {
         return job.location.toLocaleLowerCase().includes(value)
        })
        return {
          ...state,
          response:filterLocations,
        }
      }
      case "CHEK_FULL_TIME" : {
       let value = action.value;
       const filterJob = state.response.filter(job => {
         if (job.type == value) {
           return {
             ...state,
             type : [...job.type , value]
           }
         }
         return job
      })
      return {
        ...state,
        response: filterJob
      } 
      }
      case "FILTERS_JOB": {
        let value = action.value
        const filterJob = state.response.filter(job => {
          return job.title.toLocaleLowerCase().includes(value) || job.company.toLocaleLowerCase().includes(value)
        })
        return {
          ...state,
          response: filterJob
        }
      }
      case "SHOW_DESCRIPTION": {
        const findDesciption = state.response.find(jobId => {
          if (jobId.id === action.id) {
            return {
              ...state,
              description: { ...jobId.description}
            }
          }
          return jobId
        })
        return {
          ...state,
          response: findDesciption
        }
       
      }
      
      default:
        return state
    }
  }, {
    loading: false,
    response: [],
    error: null
  })
  useEffect(() => {
    let isCurrent = true
    dispatch({ type: "LOADING" })
    const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?`;
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

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>

}

export { GlobalContext, GlobalContextProvider }

