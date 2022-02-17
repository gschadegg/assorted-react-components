import React, { useState, useEffect } from 'react'
import axios from 'axios'

import LeafletMap from './LeafletMap'
import './LeafletMapDisplay.scss'

const LeafletMapDisplay = () => {
  const [allLocations, setAllLocations] = useState()
  const [mounted, setMounted] = useState(false)
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState({
    name: '',
    coordinates: [0, 0],
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  //gets NPS national parks data
  useEffect(() => {
    const getParkdata = async () => {
      try {
        const parkData =
          await axios.get(`https://developer.nps.gov/api/v1/parks?limit=456&api_key=${process.env.REACT_APP_GOVPARKS_KEY}
        `)

        let filteredParks = parkData.data.data.filter((park) => {
          return park.designation === 'National Park'
        })
        setAllLocations(filteredParks)
        setLocation({
          name: filteredParks[0].name,
          coordinates: [filteredParks[0].latitude, filteredParks[0].longitude],
        })
      } catch (error) {
        setAllLocations(null)
        setLocation(null)
        setMessage("We couldn't find any parks!")
      }
    }
    getParkdata()
  }, [])

  //sets Park thats selected
  const setLocationToSelected = (e) => {
    e.preventDefault()
    let locationCordinates = [
      e.target.options[e.target.selectedIndex].dataset.lat,
      e.target.options[e.target.selectedIndex].dataset.lng,
    ]
    if (!locationCordinates)
      locationCordinates = [allLocations[0].latitude, allLocations[0].longitude]
    setLocation({
      name: `${e.target.options[e.target.selectedIndex].innerHTML}`,
      coordinates: locationCordinates,
    })
  }

  let locationOptions = 'loading...'
  if (allLocations) {
    locationOptions = allLocations.map((park) => {
      return (
        <option
          key={park.name}
          data-lat={park.latitude}
          data-lng={park.longitude}
        >
          {park.name}
        </option>
      )
    })
  }

  if (message) {
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  return (
    <>
      {mounted && (
        <article className="mapDisplay_wrap">
          {message ? <div>{message}</div> : ''}
          <section className="mapDisplay_locationList" value={location.name}>
            <select onChange={setLocationToSelected}>{locationOptions}</select>
          </section>
          <LeafletMap location={location} />
        </article>
      )}
    </>
  )
}

export default LeafletMapDisplay
