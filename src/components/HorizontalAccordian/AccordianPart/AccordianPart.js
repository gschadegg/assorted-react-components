
const AccordianPart = ({ data, onClickHandler, active, ...args }) => {
    return(
        <section 
            onClick={onClickHandler} 
            className={`accordianPart 
            ${active === args.id ? 'active' : ''}`}
            style={{
                backgroundImage:`url(./assets/images/${data.imageAsBG})`
            }} 
            {...args}>
                <div className={`accordianPart_info`}>
                    <div className={`accordianPart_icon`}
                        style={{
                            backgroundImage:`url(./assets/icons/${data.icon})`
                        }}></div>
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.tag}</p>
                    </div>
                </div>
            
        </section>
    )
}

export default AccordianPart