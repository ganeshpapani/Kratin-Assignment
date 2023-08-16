import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'

import Header from '../Header'
import Footer from '../Footer'
import ReminderItem from '../ReminderItem'

import './index.css'

const remindersList = [
  {
    id: v4(),
    title: 'Walking',
    date: 'Date: 23 August 2023 , Wednesday',
    alert: 'Walking Just 10 Minutes a Day May Lead to a Longer Life',
    isStarred: false,
    time: '06:00',
  },
  {
    id: v4(),
    title: 'BP Medicine',
    date: 'Date: 23 August 2023 , Wednesday',
    alert: 'take medicine morning  after complete breakfast',
    isStarred: false,
    time: '08:00',
  },
]

class Reminder extends Component {
  state = {
    reminderList: remindersList,
    titleInput: '',
    dateInput: '',
    isFilterActive: false,
    timeInput: '',
    alertInput: '',
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      reminderList: prevState.reminderList.map(eachReminder => {
        if (id === eachReminder.id) {
          return {...eachReminder, isStarred: !eachReminder.isStarred}
        }
        return eachReminder
      }),
    }))
  }

  deleteReminder = reminderId => {
    const {reminderList} = this.state

    this.setState({
      reminderList: reminderList.filter(reminder => reminder.id !== reminderId),
    })
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeTimeInput = event => {
    this.setState({timeInput: event.target.value})
  }

  onChangeAlertInput = event => {
    this.setState({alertInput: event.target.value})
  }

  onAddReminder = event => {
    event.preventDefault()
    const {titleInput, dateInput, timeInput, alertInput} = this.state
    const formattedDate = dateInput
      ? format(new Date(dateInput), 'dd MMMM yyyy , EEEE')
      : ''
    const newReminder = {
      id: v4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false,
      time: timeInput,
      alert: alertInput,
    }

    this.setState(prevState => ({
      reminderList: [...prevState.reminderList, newReminder],
      titleInput: '',
      dateInput: '',
      alertInput: '',
    }))
  }

  getFilteredReminderList = () => {
    const {reminderList, isFilterActive} = this.state

    if (isFilterActive) {
      return reminderList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return reminderList
  }

  render() {
    const {
      titleInput,
      dateInput,
      isFilterActive,
      timeInput,
      alertInput,
    } = this.state
    const filterClassName = isFilterActive ? 'filter-filled' : 'filter-empty'
    const filteredRemindersList = this.getFilteredReminderList()

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="responsive-container">
            <div className="reminders-container">
              <div className="add-reminder-container">
                <form className="form" onSubmit={this.onAddReminder}>
                  <h1 className="add-reminder-heading">Add Reminder</h1>
                  <label htmlFor="title" className="label">
                    TITLE
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={titleInput}
                    onChange={this.onChangeTitleInput}
                    className="input"
                    placeholder="Title"
                  />
                  <label htmlFor="alert" className="label">
                    ALERT
                  </label>
                  <textarea
                    type="text"
                    id="title"
                    value={alertInput}
                    onChange={this.onChangeAlertInput}
                    className="input"
                    placeholder="Alert"
                    rows="2"
                    cols="50"
                  />
                  <label htmlFor="date" className="label">
                    DATE
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={dateInput}
                    onChange={this.onChangeDateInput}
                    className="input"
                  />
                  <label htmlFor="time" className="label">
                    TIME
                  </label>
                  <input
                    type="time"
                    id="date"
                    value={timeInput}
                    onChange={this.onChangeTimeInput}
                    className="input"
                  />
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </form>
                <img
                  src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1692014034/Image-from-iOS_gki8eq.avif"
                  alt="reminder"
                  className="reminder-img"
                />
              </div>
              <hr className="hr" />
              <div className="header-with-filter-container">
                <h1 className="reminder-heading">Reminders</h1>
                <button
                  type="button"
                  className={`filter-style ${filterClassName}`}
                  onClick={this.onFilter}
                >
                  Starred
                </button>
              </div>
              <ul className="reminders-list">
                {filteredRemindersList.map(eachReminder => (
                  <ReminderItem
                    key={eachReminder.id}
                    reminderDetails={eachReminder}
                    toggleIsStarred={this.toggleIsStarred}
                    deleteReminder={this.deleteReminder}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Reminder
