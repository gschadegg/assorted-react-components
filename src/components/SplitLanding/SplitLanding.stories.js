import SplitLandingComp from './SplitLanding'
import SplitLandingPartitions from './SplitLandingPartitions'

export default {
  title: 'Image Displays/Split Landing',
  component: SplitLandingComp,
  argsTypes: {
    numberOfPartitions: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
    },
  },
}

const data = [
  {
    content: (
      <>
        <h2>
          <span>Do You Prefer</span>
          <br />
          Working At Home
        </h2>
        <button className="btn__outlined">View the Perks!</button>
      </>
    ),
    classes: ['overlay--blue'],
    backgroundData: {
      src: './assets/images/homeOffice.webp',
      color: 'red',
    },
  },
  {
    content: (
      <>
        <h2>
          <span>Do You Prefer</span>
          <br />
          Working In An Office
        </h2>
        <button className="btn__outlined">View the Perks!</button>
      </>
    ),
    classes: ['overlay--purple'],
    backgroundData: { src: './assets/images/office.webp' },
  },
  {
    content: (
      <>
        <h2>
          <span>Do You Prefer</span>
          <br />
          Alternative Option One
        </h2>
        <button className="btn__outlined">View the Perks!</button>
      </>
    ),
    classes: ['overlay--green'],
    backgroundData: {
      src: './assets/images/homeOffice.webp',
      color: 'red',
    },
  },
  {
    content: (
      <>
        <h2>
          <span>Do You Prefer</span>
          <br />
          Alternative Option Two
        </h2>
        <button className="btn__outlined">View the Perks!</button>
      </>
    ),
    classes: ['overlay--orange'],
    backgroundData: { src: './assets/images/office.webp' },
  },
  {
    content: (
      <>
        <h2>
          <span>Do You Prefer</span>
          <br />
          Alternative Option Three
        </h2>
        <button className="btn__outlined">View the Perks!</button>
      </>
    ),
    classes: ['overlay--red'],
    backgroundData: {
      src: './assets/images/homeOffice.webp',
      color: 'red',
    },
  },
]

const Template = ({ numberOfPartitions, ...args }) => {
  let passedData = data.slice(0, numberOfPartitions)
  let interiorComponents = passedData.map((cur, idx) => {
    return (
      <SplitLandingPartitions
        key={idx}
        classes={cur.classes}
        backgroundData={cur.backgroundData}
      >
        {cur.content}
      </SplitLandingPartitions>
    )
  })

  return <SplitLandingComp {...args}>{interiorComponents}</SplitLandingComp>
}

export const SplitLanding = Template.bind({})
SplitLanding.args = {
  numberOfPartitions: 2,
}
