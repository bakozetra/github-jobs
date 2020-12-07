import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'

function Header() {
  const [jobAbout , setJobAbout] = useState([]);
  const {state , dispatch } = useContext(GlobalContext);
  let {response} = state;

 console.log(response);


  function filters(e){
    dispatch({ type: 'FILTERS_JOB' , searchTerm: e.target.value});
	}
  return (
    <header>
        <label>
          <input
            placeholder="Title,companies, expertise"
            onChange={filters}
          />
          {/* <button onClick={filters}>Search</button> */}
        </label>
    </header>
  )
}

export default Header
