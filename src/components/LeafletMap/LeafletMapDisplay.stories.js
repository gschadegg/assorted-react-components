import React from 'react'
import LeafletMapDisplay from './LeafletMapDisplay'

export default {
  title: 'Maps/US National Parks With Leaflet ',
  component: LeafletMapDisplay,
}

const Template = (args) => <LeafletMapDisplay {...args} />

export const USNationalParksWithLeaflet = Template.bind({})
