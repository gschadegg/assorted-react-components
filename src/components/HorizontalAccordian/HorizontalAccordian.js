import { useState } from 'react'
import AccordianPart from './AccordianPart/AccordianPart'
import './HorizontalAccordian.scss'

const HorizontalAccordian = ({ data }) => {
    const [activePart, setActivePart] = useState(0)
    // max num parts: 5
    if(data.length > 5){
        data = data.slice(0, 5)
    }
    const handlerImgClick = (e) => {
        setActivePart(parseInt(e.target.dataset.partnum))
    }
    const partDisplay = data.map((cardData, idx) => {
        return <AccordianPart data={cardData} onClickHandler={handlerImgClick} id={idx} key={idx} data-partnum={idx} active={activePart} />
    })

    return(
        <article className='accordianWrap'>
            {partDisplay ? partDisplay : 'Loading...'}
        </article>
    )
}

export default HorizontalAccordian