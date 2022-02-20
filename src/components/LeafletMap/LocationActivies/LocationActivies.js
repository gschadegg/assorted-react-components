import React, { useState } from 'react'

import PropTypes from 'prop-types'
import services from './../services/locations'

import './LocationActivies.scss'

const LocationActivities = ({ location }) => {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedActivityDetails, setSelectedActivityDetails] = useState(null)

  const handlerActivityClick = (e) => {
    services
      .getParkActivity(e.target.id, location.parkCode)
      .then((res) => {
        if (res.data.length <= 0) {
          return
        }
        setSelectedActivity(e.target.innerHTML)
        console.log('incall', res.data)
        setSelectedActivityDetails(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let listOfActivities = location?.activities?.map((act) => {
    return (
      <li key={act.id}>
        <button id={act.id} onClick={handlerActivityClick}>
          {act.name}
        </button>
      </li>
    )
  })
  let listOfDetails
  if (selectedActivityDetails) {
    console.log('inif', selectedActivityDetails)
    listOfDetails = selectedActivityDetails?.map((detail) => {
      console.log('detail', detail)

      return (
        <li key={detail.id}>
          <h3 id={detail.id}>{detail.title}</h3>
          <span>{detail.shortDescription}</span>
        </li>
      )
    })
  }

  const clearSelectedAcivity = () => {
    setSelectedActivity(null)
    setSelectedActivityDetails(null)
  }

  return (
    <>
      <div id="mapDisplay_activities" className="mapDisplay_DataContainer">
        <h2>
          <button onClick={clearSelectedAcivity}>Activities</button>{' '}
          {selectedActivity ? ` < ${selectedActivity} ` : ''}
        </h2>
        {selectedActivityDetails ? (
          <ul>{listOfDetails}</ul>
        ) : (
          <ul>
            {listOfActivities ? listOfActivities : 'finding activities...'}
          </ul>
        )}
      </div>
    </>
  )
}

LocationActivities.propTypes = {
  location: PropTypes.object,
}
export default LocationActivities
