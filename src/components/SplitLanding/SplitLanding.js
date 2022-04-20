import React from 'react'
import SplitLandingPartitions from './SplitLandingPartitions'
import './SplitLanding.scss'

const SplitLanding = ({ children }) => {
  //min 2, max 5 partitions
  let partitions = children
  let sizingClass = 'large'

  if (React.Children.count(children) === 0) {
    partitions = React.Children.toArray(children)
    partitions.push(
      <SplitLandingPartitions
        backgroundData={{ src: '', color: 'navy' }}
        key={'addedOne'}
      >
        Add Your First Partition
      </SplitLandingPartitions>,
      <SplitLandingPartitions
        backgroundData={{ src: '', color: 'purple' }}
        key={'addedTwo'}
      >
        Add Another Partition
      </SplitLandingPartitions>
    )
  } else if (React.Children.count(children) === 1) {
    partitions = React.Children.toArray(children)
    partitions.push(
      <SplitLandingPartitions
        backgroundData={{ src: '', color: 'purple' }}
        key={'added'}
      >
        Add Another Partition
      </SplitLandingPartitions>
    )
  } else if (React.Children.count(children) > 5) {
    partitions = React.Children.toArray(children)
    partitions.splice(5, partitions.length - 5)
  }

  if (React.Children.count(children) > 2) {
    sizingClass = React.Children.count(children) > 4 ? 'small' : 'base'
  }

  return (
    <article
      className={`splitLanding_container splitLanding_container--${sizingClass}Content`}
      data-testid="splitContainer"
    >
      {partitions}
    </article>
  )
}

export default SplitLanding
