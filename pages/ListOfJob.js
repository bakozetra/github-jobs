import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import styled from 'styled-components';
import Header from './header';
const ListStyle = styled.ul`
     li{
      list-style: none;
      display : flex;
      background: rgba(255, 255, 255, 1);
      img {
        width : 10%;
      }
     }
`
function ListOfJob() {
  const { state } = useContext(GlobalContext)
  const { response } = state;
  console.log(response);
  return (
    <div>
      <Header/>
      {response.map(job => {
        return (
          <ListStyle>
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
          </ListStyle>
        )
      })}

    </div>
  )
}


export default ListOfJob
