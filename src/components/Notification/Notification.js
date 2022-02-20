import './Notification.scss'

const Notification = ({ message, status }) => {
  return (
    <>
      <div className={`${message ? 'active' : ''} ${status} alertMessage`}>
        {message && message}
      </div>
    </>
  )
}

export default Notification
