import HorizontalAccordian from './HorizontalAccordian'

export default {
    title: 'Horizontal Image Accordian',
    component: HorizontalAccordian,
    argsTypes:{
        data: {
           table: { expanded: true } 
        }
    }
}

const Template = (args) => <HorizontalAccordian {...args} />

const demoData = [
    {'title': 'The Mountains', 'tag':'sit amet, consectetur adipiscing elit, sed do', 'imageAsBG':'one.webp', 'icon':'landscape.svg'},
    {'title': 'Mighty Stream', 'tag':'quis nostrud exercitation ullamco laboris nisi ut', 'imageAsBG':'three.webp', 'icon':'waves.svg'},
    {'title': 'Strong Forest', 'tag':'sit amet, consectetur adipiscing elit', 'imageAsBG':'four.webp', 'icon':'park.svg'},
    {'title': 'Fairy Rings', 'tag':'velit esse cillum dolore eu fugiat nulla pariatur', 'imageAsBG':'five.webp', 'icon':'ring.svg'},
    {'title': 'Rolling Fog', 'tag':'quis nostrud exercitation ullamco laboris nisi ', 'imageAsBG':'six.webp', 'icon':'cloud.svg'},
  ]

export const ManyAccordianPanels = Template.bind({})
ManyAccordianPanels.args = {
    data: demoData
}

export const FewAccordianPanels = Template.bind({})
FewAccordianPanels.args = {
    data: demoData.slice(0,3)
}

