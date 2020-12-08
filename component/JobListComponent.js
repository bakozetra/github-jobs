import React, { useContext } from 'react'
import { MainJOb } from './MainJob';

function JobListComponent() {
  const {job} = useContext(MainJOb);
  
  return (
    <div>
      <li>
        <img src={job.company_logo}></img>
        <div>
          <h5>{job.company}</h5>
          <h3>{job.title}</h3>
          <button>{job.type}</button>
          <div>
            <p>{job.location}</p>
            <p>{job.created_at}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default JobListComponent
