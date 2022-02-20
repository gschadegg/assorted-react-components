import React, { useState, useEffect, useMemo } from 'react'

import LocationMap from './LocationMap'
import LocationDetails from './LocationDetails/LocationDetails'
import Notification from '../Notification/Notification'
import services from './services/locations'
import { useMounted } from './hooks/hooks'
import './NationalParksMap.scss'

const NationalParksMap = () => {
  const mounted = useMounted()
  const [message, setMessage] = useState('')
  const [allLocations, setAllLocations] = useState()
  const [location, setLocation] = useState({
    id: '',
    name: '',
    coordinates: [0, 0],
    parkdata: {},
  })

  //gets NPS national parks data
  useEffect(() => {
    services
      .getAll()
      .then((res) => {
        let filteredParks = res.data.filter((park) => {
          return park.designation === 'National Park'
        })
        setAllLocations(filteredParks)
        setLocation({
          id: filteredParks[0].id,
          name: filteredParks[0].name,
          coordinates: [filteredParks[0].latitude, filteredParks[0].longitude],
          parkdata: filteredParks[0],
        })
      })
      .catch((error) => {
        setAllLocations(null)
        setLocation({ id: '', name: '', coordinates: [0, 0], parkdata: {} })
        setMessage("We couldn't find any parks!")
      })
  }, [])

  //sets Park thats selected
  const setLocationToSelected = (e) => {
    e.preventDefault()
    const locationData = allLocations.find(
      (el) => el.id === e.target.options[e.target.selectedIndex].id
    )
    let locationCordinates
    if (!locationData) {
      setLocation({ id: '', name: '', coordinates: [0, 0], parkdata: {} })
      setMessage("We couldn't find that park!")
    } else {
      locationCordinates = [locationData.latitude, locationData.longitude]
      setLocation({
        id: `${e.target.options[e.target.selectedIndex].id}`,
        name: `${e.target.options[e.target.selectedIndex].innerHTML}`,
        coordinates: locationCordinates,
        parkdata: locationData,
      })
    }
  }

  //creates list of NP as select dd options
  const locationOptions = useMemo(() => {
    if (allLocations) {
      return allLocations.map((park) => {
        return (
          <option key={park.name} id={park.id}>
            {park.name}
          </option>
        )
      })
    }
  }, [allLocations])

  if (message) {
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }
  return (
    <>
      {mounted && (
        <article className="mapDisplay_wrap">
          <Notification message={message} status={'error'} />
          <section className="mapDisplay_locationList">
            <select onChange={setLocationToSelected} value={location.name}>
              {locationOptions ? locationOptions : <option>loading...</option>}
            </select>
            <span>National Park</span>
          </section>
          <LocationMap location={location} />
          <section className="mapDisplay_locationDataCol">
            {location && <LocationDetails location={location.parkdata} />}
          </section>
        </article>
      )}
    </>
  )
}

export default NationalParksMap
