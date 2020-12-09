import React, { useContext, useState } from 'react'
import { GlobalContext } from '../pages/GlobalContext';

function FullTime() {
  const {state , dispatch} =  useContext(GlobalContext)
  const [checked, setChecked] = useState(true);
  function handeClik(e) {
    if(checked === e.target.checked) {
      setChecked(checked);
      let value = e.target.checked;
      dispatch ({type:"CHEK_FULL_TIME" , value : value })
      console.log("hello");
    }

    else {
      console.log("wron");
      return checked
    }
  }
  console.log(checked);
  return (
    <div>
      <input type ="checkbox" onClick={handeClik}/>
      <label>full time</label>
    </div>
  )
}

export default FullTime
