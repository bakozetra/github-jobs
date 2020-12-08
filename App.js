import React, {} from 'react'
import {Switch , Route} from 'react-router-dom'
import Description from './pages/Description'
import ListOfJob from './pages/ListOfJob'
function App() {
   
  return (
    <div>
      <h1>Searching Job</h1>
      <Switch>
        <Route exact path ="/">
        <ListOfJob/>
        </Route>
        <Route path ="/:description">
          <Description/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
