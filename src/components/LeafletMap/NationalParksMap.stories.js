import React from 'react'
import NationalParksMap from './NationalParksMap'

export default {
  title: 'Maps/US National Parks With Leaflet ',
  component: NationalParksMap,
}

const Template = (args) => <NationalParksMap {...args} />

export const USNationalParksWithLeaflet = Template.bind({})
