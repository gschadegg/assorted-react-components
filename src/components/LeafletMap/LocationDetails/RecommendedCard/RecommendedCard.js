import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './RecommendedCard.scss'

const RecommendedCard = ({ activity }) => {
  return (
    <article
      className="recommended_card"
      style={{ backgroundImage: `url( ${activity.images[0].url} )` }}
    >
      <section className="recommended_detailsWrap">
        <h4>{activity.title}</h4>
        <div className="recommended_details">
          <span>{activity.duration ? activity.duration : 'No Duration'}</span>
          &#8226;
          <span>{activity.arePetsPermitted ? 'Pets Allowed' : 'No Pets'}</span>
        </div>
      </section>
    </article>
  )
}
RecommendedCard.propTypes = {
  activity: PropTypes.object,
}
export default RecommendedCard
