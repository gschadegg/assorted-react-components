import HorizontalAccordian from './HorizontalAccordian'

export default {
  title: 'Image Displays/Horizontal Image Accordian',
  component: HorizontalAccordian,
  argsTypes: {
    numberOfPanels: {
      control: { type: 'range', min: 2, max: 5, step: 1 },
    },
  },
}

const demoData = [
  {
    title: 'The Mountains',
    tag: 'sit amet, consectetur adipiscing elit, sed do',
    imageAsBG: 'one.webp',
    icon: 'landscape.svg',
  },
  {
    title: 'Mighty Stream',
    tag: 'quis nostrud exercitation ullamco laboris nisi ut',
    imageAsBG: 'three.webp',
    icon: 'waves.svg',
  },
  {
    title: 'Strong Forest',
    tag: 'sit amet, consectetur adipiscing elit',
    imageAsBG: 'four.webp',
    icon: 'park.svg',
  },
  {
    title: 'Fairy Rings',
    tag: 'velit esse cillum dolore eu fugiat nulla pariatur',
    imageAsBG: 'five.webp',
    icon: 'ring.svg',
  },
  {
    title: 'Rolling Fog',
    tag: 'quis nostrud exercitation ullamco laboris nisi ',
    imageAsBG: 'six.webp',
    icon: 'cloud.svg',
  },
]

const Template = ({ numberOfPanels, ...args }) => {
  let passedData = demoData.slice(0, numberOfPanels)

  return <HorizontalAccordian data={passedData} {...args} />
}

export const HorizontalImageAccordian = Template.bind({})
HorizontalImageAccordian.args = {
  numberOfPanels: 5,
}
