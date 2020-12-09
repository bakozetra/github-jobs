import React from 'react'

function Location({ filterLocation }) {
  return (
    <div className="locationInput">
      <p>Location</p>
      <input
        placeholder="Loaction"
        onChange={filterLocation}
      />
    </div>
  )
}

export default Location
