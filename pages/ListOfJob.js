import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import styled from 'styled-components';
import Header from './header';
import { Link } from 'react-router-dom'
import JobListComponent from '../component/JobListComponent';
import { MainJobProvider } from '../component/MainJob';
import FullTime from '../component/FullTime';
import LocationChek from './LocationChek';
import Location from "./Location"

const ListStyle = styled.ul`
  a{
     li{
      list-style: none;
      display : flex;
      background: rgba(255, 255, 255, 1);
      img {
        width : 10%;
      }
     }
    }
`
function ListOfJob() {
  const { state, dispatch } = useContext(GlobalContext)
  const { response, loading } = state;
  const [desc, setDesc] = useState([]);


  function filtersTitle(e) {
    let input = e.target.value
    dispatch({ type: "FILTERS_JOB", value: input })
  }
  function ShowDescription(id) {
    let idDescription = id
    dispatch({ type: "SHOW_DESCRIPTION" }, idDescription)
  }
  function showDescription(id) {
    const filters = response.filter(ids => ids.id === id);
    setDesc(filters)
  }
  function filtersId(id) {
    dispatch({ type: "SHOW_DESCRIPTION", id })
  }
  console.log(desc);
  return (
    <div>
      <Header filtersTitle={filtersTitle} />
      <div className="main_content">
      <div>
        <FullTime />
        <Location/>
        <LocationChek />
      </div>
      {loading && <p>Loading...</p>}
      {!loading && response && (
        <div>
          {response.map(job => (
            <MainJobProvider job={job} key={job.id} >

              <ListStyle>
                <Link to={`/${job.id}}`} onClick={() => filtersId(job)}>
                  <JobListComponent />
                </Link>
              </ListStyle>
            </MainJobProvider>
          )
          )}
        </div>
      )}
      </div>
    </div>
  )
}


export default ListOfJob
