import React, { useState, useCallback, useEffect } from 'react'
import SimpleSolidButton from './../../Buttons/SimpleSolidButton/SimpleSolidButton'
import './TitledProgressSteps.scss'

const TitledProgressSteps = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [progressLength, setProgressLength] = useState('0%')
    const [processFinished, setProcessFinished] = useState(false)
    
    //assures there is at least a warning displayed
    if(!steps || steps.length<=0){
        steps = ['no active steps']
    }
    const numSteps = steps.length

    // creates individual step markers
    const stepMarkers = steps.map((step, idx) => (
        <div key={idx+1} className={`progress_stepMarker ${idx+1 === currentStep && !processFinished ? 'active' : ''} ${idx+1 < currentStep || processFinished ? 'completed' : ''}`}>
            <div className={`progress_number`}>
                <span></span>
            </div>
            <span className={`progress_stepTitle`}>{step}</span>
        </div>
    ))

    //sets the next step as active
    const increaseStepHandler = useCallback(() => {
        if(currentStep === numSteps) {
            if(!processFinished) {
                setProcessFinished(true)
            }
            return
        }
        setCurrentStep(prevState =>  prevState + 1)
    },[currentStep, numSteps, processFinished])

    //sets the prev step as active
    const decreaseStepHandler = useCallback(() => {
        if(currentStep === 1) return
        if(currentStep < 1) {
            setCurrentStep(1)
            return
        }
        if(currentStep === numSteps && processFinished) {
            setProcessFinished(false)
            return
        }
        setCurrentStep(prevState =>  prevState - 1)
    },[currentStep, numSteps, processFinished])

   //resets process to not completed
    useEffect(() => {
        if(currentStep < numSteps) {
            setProcessFinished(false)
        }
    }, [currentStep, numSteps])

    //sets length of progress bar
    useEffect(() => {
        setProgressLength( (prevState) =>{
            return `${((currentStep-1) / (numSteps-1)) * 100}%`
        })
    }, [currentStep, numSteps])


    return(
        <>
            <section className={`progress_container`}>
                <div className={`progress_bar`} style={{ width: `calc(${progressLength} - ((30px / ${numSteps}) * (${currentStep - 1})))` }}></div>
                {stepMarkers.length > 0 ? stepMarkers : 'Loading...'}
            </section>
            <div className={'displayFlex center'}>
                <SimpleSolidButton buttonHandler={decreaseStepHandler} varient={'gray'} disabled={1 === currentStep ? true : false}>Prev</SimpleSolidButton>
                <SimpleSolidButton buttonHandler={increaseStepHandler} varient={`${currentStep === numSteps ? 'teal' : 'gray'}`} disabled={processFinished ? true : false}>{`${currentStep === numSteps ? 'Submit' : 'Next'}`}</SimpleSolidButton>
            </div>
            {processFinished ?
                <div className={'displayFlex center'}>
                    Process Submitted!
                </div> :''
            }
        </>
    )
}

export default TitledProgressSteps