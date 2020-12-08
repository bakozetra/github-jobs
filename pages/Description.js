import React, { useContext } from 'react'
import DescriptionComponent from '../component/DescriptionComponent';
// import { GlobalContext } from './GlobalContext'
// import {useParams} from "react-router-dom"
import { MainJOb } from '../component/MainJob'

function Description() {
 
  // const {state} = useContext(GlobalContext);
  // const {response} = state
  // const {description} = useParams();

  return (
    <div>
      <DescriptionComponent/>
    </div>
  )
}

export default Description
