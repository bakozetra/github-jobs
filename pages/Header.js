import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import Image from "../backgroundImg.png"

function Header({filtersTitle}) {
  const {state , dispatch } = useContext(GlobalContext);
  let {response} = state;

  return (
    <header>
      <img src={Image}></img>
        <label>
          <div>
          <input
            placeholder="Title,companies, expertise"
            onChange={filtersTitle}
          />
          <button>Search</button>
          </div>
        </label>
    </header>
  )
}

export default Header
