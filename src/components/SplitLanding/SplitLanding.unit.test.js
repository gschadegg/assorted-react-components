import { render, screen } from '@testing-library/react'
import SplitLanding from './SplitLanding'
import SplitLandingPartitions from './SplitLandingPartitions'

describe('Split Landing Page', () => {
  it('renders at least 2 partitions, when given 1', () => {
    render(
      <SplitLanding>
        <SplitLandingPartitions>
          <h2>partition one</h2>
        </SplitLandingPartitions>
      </SplitLanding>
    )
    const splitContainer = screen.getByTestId('splitContainer')
    expect(splitContainer).toBeDefined()
    expect(splitContainer.children.length).toEqual(2)
  })

  it('renders at least 2 partitions, when given 0', () => {
    render(<SplitLanding></SplitLanding>)
    const splitContainer = screen.getByTestId('splitContainer')
    expect(splitContainer).toBeDefined()
    expect(splitContainer.children.length).toEqual(2)
  })

  it('wont render more then 5 partitions', () => {
    render(
      <SplitLanding>
        <SplitLandingPartitions>
          <h2>partition one</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition two</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition three</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition four</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition five</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition six</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition seven</h2>
        </SplitLandingPartitions>
        <SplitLandingPartitions>
          <h2>partition eight</h2>
        </SplitLandingPartitions>
      </SplitLanding>
    )
    const splitContainer = screen.getByTestId('splitContainer')
    expect(splitContainer).toBeDefined()
    expect(splitContainer.children.length).toEqual(5)
  })
})
