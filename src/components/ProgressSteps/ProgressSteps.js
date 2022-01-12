import React, { useState, useCallback, useEffect } from 'react'
import SimpleSolidButton from '../Buttons/SimpleSolidButton/SimpleSolidButton'
import './ProgressSteps.scss'

const ProgressSteps = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [progressLength, setProgressLength] = useState('0%')
    
    //assures that there are at least 2 steps
    if(!steps || steps<=1){
        steps = 2
    }

    const numSteps = parseInt(steps)

    //creates markers html
    const stepMarkers = [...Array(parseInt(numSteps))].map((el, idx) => ( 
         <div key={idx+1} className={`progressStep_stepMarker ${idx+1 <= currentStep ? 'active' : ''}`}>
             {idx+1}
         </div>
        ) 
    )

    //sets the next step as active
    const increaseStepHandler = useCallback(() => {
        if(currentStep === numSteps) return
        if(currentStep > numSteps) {
            setCurrentStep(numSteps)
            return
        }

        setCurrentStep(prevState =>  prevState + 1)
    },[currentStep, numSteps])

    //sets the prev step as active
    const decreaseStepHandler = useCallback(() => {
        if(currentStep === 1) return
        if(currentStep < 1) {
            setCurrentStep(1)
            return
        }
        if(currentStep > numSteps) {
            setCurrentStep(numSteps - 1)
            return
        }
        setCurrentStep(prevState =>  prevState - 1)
    },[currentStep, numSteps])

    //sets length of progress bar
    useEffect(() => {
        setProgressLength( `${((currentStep-1) / (numSteps-1)) * 100}%`)
        return () => {
            
        }
    }, [currentStep, numSteps])

    return(
        <>
            <section className={`progressSteps_container`}>
                <div className={`progressSteps_bar`} style={{ width: progressLength }}></div>
                {stepMarkers.length > 0 ? stepMarkers : 'Loading...'}
            </section>
            <div className={'displayFlex center'}>
                <SimpleSolidButton buttonHandler={decreaseStepHandler} varient={'gray'} disabled={1 === currentStep ? true : false}>Prev</SimpleSolidButton>
                <SimpleSolidButton buttonHandler={increaseStepHandler} varient={'gray'} disabled={numSteps === currentStep ? true : false}>Next</SimpleSolidButton>
            </div>
        </>
    )
}

export default ProgressSteps