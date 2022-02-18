import React, { useState, useEffect, useMemo } from 'react'
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
    parkcode: '',
  })
  const [locationThingsToDo, setLocationThingsToDo] = useState()

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
          parkcode: filteredParks[0].parkCode,
        })
      } catch (error) {
        setAllLocations(null)
        setLocation(null)
        setMessage("We couldn't find any parks!")
      }
    }
    getParkdata()
  }, [])

  useEffect(() => {
    const getParkThingsToDo = async () => {
      try {
        const { data } =
          await axios.get(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${location.parkcode}&limit=10&api_key=${process.env.REACT_APP_GOVPARKS_KEY}
        `)
        setLocationThingsToDo(data.data)
      } catch (error) {
        setLocationThingsToDo(null)
        setMessage('Not finding any data on that specific park')
      }
    }
    if (location.parkcode) {
      getParkThingsToDo()
    }
  }, [location])

  //sets Park thats selected
  const setLocationToSelected = (e) => {
    e.preventDefault()
    let locationCordinates = [
      e.target.options[e.target.selectedIndex].dataset.lat,
      e.target.options[e.target.selectedIndex].dataset.lng,
    ]
    console.log(
      'new parkcode',
      e.target.options[e.target.selectedIndex].dataset.parkcode
    )
    if (!locationCordinates)
      locationCordinates = [allLocations[0].latitude, allLocations[0].longitude]
    setLocation({
      name: `${e.target.options[e.target.selectedIndex].innerHTML}`,
      coordinates: locationCordinates,
      parkcode: e.target.options[e.target.selectedIndex].dataset.parkcode,
    })
  }

  const locationOptions = useMemo(() => {
    if (allLocations) {
      return allLocations.map((park) => {
        console.log(park)
        return (
          <option
            key={park.name}
            data-lat={park.latitude}
            data-lng={park.longitude}
            data-parkcode={park.parkCode}
          >
            {park.name}
          </option>
        )
      })
    }
  }, [allLocations])

  let listOfThingsToDo
  if (locationThingsToDo) {
    console.log(locationThingsToDo)
    listOfThingsToDo = locationThingsToDo.map((item) => {
      return <li key={item.title}>{item.title}</li>
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
          <section className="mapDisplay_locationList">
            <select onChange={setLocationToSelected} value={location.name}>
              {locationOptions ? locationOptions : 'loading...'}
            </select>
            <span>National Park</span>
          </section>
          {/* <section className="mapDisplay_locationDataCol">
            <div className="mapDisplay_DataContainer">
              <ul>{listOfThingsToDo ? listOfThingsToDo : 'loading...'}</ul>
            </div>
          </section> */}
          <LeafletMap location={location} />
        </article>
      )}
    </>
  )
}

export default LeafletMapDisplay
