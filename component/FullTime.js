import React, { useContext, useState } from 'react'
import { GlobalContext } from '../pages/GlobalContext';

function FullTime() {
  const {state , dispatch} =  useContext(GlobalContext)
  const [checked, setChecked] = useState(true);
  function handeClik(e) {
    if(checked === e.target.checked) {
      let value = e.target.checked;
      dispatch ({type:"CHEK_FULL_TIME" , value : value })
      console.log("hello");
      return  setChecked(checked);
    }
    else {
      console.log("wron");
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
