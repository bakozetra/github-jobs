import React, { useContext } from 'react'
import { MainJOb } from './MainJob';

function JobListComponent() {
  const { job } = useContext(MainJOb);

  return (
    <div className="container">
      <li>
        <img src={job.company_logo}></img>
        <div className="job_content">
          <div>
            <h5>{job.company}</h5>
            <h3>{job.title}</h3>
            <button>{job.type}</button>
          </div>
          <div className="about_location_date">
            <p>{job.location}</p>
            <p>{job.created_at}</p>
          </div>
        </div>
      </li>
    </div>
  )
}

export default JobListComponent
