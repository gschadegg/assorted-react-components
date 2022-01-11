import './SimpleSolidButton.scss'

const SimpleSolidButton = ({ children , varient, url = null, buttonHandler = null, disabled=false,  ...args }) => {
        let buttonContent = <a to={url} {...args} className={`simple_btn ${varient}`}>{children}</a>
        if(buttonHandler){
            buttonContent = <button onClick={buttonHandler} disabled={disabled ? true : false} className={`simple_btn ${varient}`}>{children}</button>
        }
        return(
            <>
                {buttonContent}
            </> 
        )
}
    
export default SimpleSolidButton