import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'

function Header({filtersTitle}) {
  const [jobAbout , setJobAbout] = useState([]);
  const {state , dispatch } = useContext(GlobalContext);
  let {response} = state;

  return (
    <header>
        <label>
          <input
            placeholder="Title,companies, expertise"
            onChange={filtersTitle}
          />
          <button>Search</button>
        </label>
    </header>
  )
}

export default Header
