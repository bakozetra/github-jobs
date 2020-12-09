import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../pages/GlobalContext'
import { MainJOb } from './MainJob';

function DescriptionComponent() {
  const { job } = useContext(MainJOb);
  console.log(job);
  const { state, dispatch } = useContext(GlobalContext);
  const { response } = state;

  return (
    <div>
      {
        response.map(p => {
          return (
            <p>{p.title}</p>
          )
        })
      }
      <p></p>
      <p></p>
    </div>
  )
}

export default DescriptionComponent
