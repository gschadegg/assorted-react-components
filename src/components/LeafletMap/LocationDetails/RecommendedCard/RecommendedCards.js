import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import RecommendedCard from './RecommendedCard'
import './RecommendedCard.scss'

const RecommendedCards = ({ activitiesList }) => {
  //creates list of recommended activity cards
  const activityCards = useMemo(() => {
    if (activitiesList) {
      return activitiesList.map((item) => {
        console.log('card list item', item)
        return <RecommendedCard key={item.id} activity={item} />
      })
    }
  }, [activitiesList])

  return <>{activityCards}</>
}
RecommendedCards.propTypes = {
  activitiesList: PropTypes.array,
}
export default RecommendedCards
