import React from 'react'
import './SplitLanding.scss'

const SplitLandingPartitions = ({
  children,
  backgroundData = null,
  classes = [],
}) => {
  return (
    <section
      className={`splitLanding_partitions ${classes.join('')}`}
      style={{
        backgroundImage: backgroundData?.src
          ? `url(${backgroundData?.src})`
          : null,
        backgroundColor: backgroundData?.color
          ? backgroundData.color
          : 'dimgrey',
      }}
    >
      {children}
    </section>
  )
}

export default SplitLandingPartitions
