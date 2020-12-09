import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext';

function LocationChek() {
  const { state, dispatch } = useContext(GlobalContext);
  const [check, setCheck] = useState(false);
  console.log(check);
  function handleClikButton(e) {
    let value = e.target.value;
    if (!check == true) {
      console.log("checked");
      setCheck(!check)
      dispatch({type :"NAME_COUNTRY" ,value })
    }
    console.log('rr');
  }
  console.log(check);

  return (
    <form className="checkboxtype">
      <div>
        <input
          value="London"
          type="checkbox"
         onClick={handleClikButton} />
        <label>London</label>
      </div>
      <div>
        <input
          value="Amsterdam"
          type="checkbox"
         onClick={handleClikButton} />
        <label>Amsterdam</label>
      </div>
      <div>
        <input
          value="New York"
          type="checkbox"
         onClick={handleClikButton} />
        <label>New York</label>
      </div>
      <div>
        <input
          value="Berlin"
          type="checkbox"
         onClick={handleClikButton} />
        <label>Berlin</label>
      </div>
    </form>
  )
}

export default LocationChek
