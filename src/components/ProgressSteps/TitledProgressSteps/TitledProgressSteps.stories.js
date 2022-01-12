import React from 'react'
import TitledProgress from './TitledProgressSteps'

export default {
    title: 'Form/Titled Progress Steps',
    component: TitledProgress,
    argsTypes:{
        steps: {control: 'object'},
    }
}

const Template = (args) => <TitledProgress {...args} />

export const TitledProgressSteps = Template.bind({})
TitledProgressSteps.args = {
    steps: [
          'First',
          'Second',
          'Third',
          'Forth',
        ]
}