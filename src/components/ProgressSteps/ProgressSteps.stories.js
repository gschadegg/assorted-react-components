import React from 'react'
import ProgressSteps from './ProgressSteps'

export default {
    title: 'Form/Simple Progress Steps',
    component: ProgressSteps,
    argsTypes:{
        steps: {control: 'number'},
    }
}

const Template = (args) => <ProgressSteps {...args} />

export const SimpleProgressSteps = Template.bind({})
SimpleProgressSteps.args = {
    steps: '4'
}