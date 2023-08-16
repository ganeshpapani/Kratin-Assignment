import './index.css'

const ReminderItem = props => {
  const {reminderDetails, toggleIsStarred, deleteReminder} = props
  const {id, title, date, isStarred, time, alert} = reminderDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }
  const onDeleteReminder = () => {
    deleteReminder(id)
  }

  return (
    <li className="reminder-item">
      <div className="header-container">
        <h1 className="title">{title}</h1>
        <button
          type="button"
          data-testid="star"
          className="star-button"
          onClick={onClickStar}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
      <div className="time-date-container">
        <p className="date"> {date}</p>
        <p className="time"> Time:{time}</p>
      </div>
      <p className="alert">{alert}</p>
      <div className="button-container">
        <button
          className="button"
          type="button"
          onClick={onDeleteReminder}
          data-testid="delete"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default ReminderItem
