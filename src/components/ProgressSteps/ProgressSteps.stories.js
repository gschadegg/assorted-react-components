import React from 'react'
import ProgressSteps from './ProgressSteps'

export default {
  title: 'Form/Simple Progress Steps',
  component: ProgressSteps,
  argsTypes: {
    steps: { control: { type: 'number', min: 2, max: 10 } },
  },
}

const Template = (args) => <ProgressSteps {...args} />

export const SimpleProgressSteps = Template.bind({})
SimpleProgressSteps.args = {
  steps: 4,
}
