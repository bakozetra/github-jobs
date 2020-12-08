import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../pages/GlobalContext'

function DescriptionComponent() {
  const { state , dispatch } = useContext(GlobalContext);
  const { response } = state;

  // console.log(response);
  // const { descriptions } = useParams()
  return (
    <div>
      {
        response.map( p => {
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
