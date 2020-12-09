import React, { useContext} from 'react'
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
     }
    }
`
function ListOfJob() {
  const { state, dispatch } = useContext(GlobalContext)
  const { response, loading } = state;
  

  function filtersTitle(e) {
    let input = e.target.value
    dispatch({ type: "FILTERS_JOB", value: input })
  }
  
  function ShowDescription(id) {
    let idDescription = id
    dispatch({ type: "SHOW_DESCRIPTION" }, idDescription)
  }

 
  function filtersId(id) {
    dispatch({ type: "SHOW_DESCRIPTION", id })
  }
  function filterLocation(e) {
    let input = e.target.value;
    dispatch({ type: "LOCATION", value: input })
  }

  return (
    <div>
      <Header filtersTitle={filtersTitle} />
      <div className="main_content">
        <div className="typeOfinput">
          <FullTime />
          <Location filterLocation={filterLocation} />
          <LocationChek />
        </div>
        {loading && <h1>Loading...</h1>}
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
