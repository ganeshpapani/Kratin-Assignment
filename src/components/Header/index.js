import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FiLogOut} from 'react-icons/fi'
import {BiNotification} from 'react-icons/bi'
import {FcHome} from 'react-icons/fc'
import {FaHospitalSymbol} from 'react-icons/fa'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/" className="nav-link">
            <img
              className="image-logo"
              src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1691737145/medical-logo_odt4jl.jpg"
              alt="website logo"
            />
          </Link>

          <Popup
            modal
            trigger={
              <button type="button" className="log-out-icon-button">
                <FiLogOut size={25} />
              </button>
            }
          >
            {close => (
              <div className="model-container">
                <p className="para-text">Are you sure, you want to logout?</p>
                <div>
                  <button
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                    className="close-button"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="confirm-button"
                    onClick={onClickLogout}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dyu5n5spk/image/upload/v1691737145/medical-logo_odt4jl.jpg"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/reminder" className="nav-link">
                Reminder
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/hospital" className="nav-link">
                Best Hospital
              </Link>
            </li>
          </ul>
          <Popup
            modal
            trigger={
              <button type="button" className="logo-out-button">
                Logout
              </button>
            }
          >
            {close => (
              <div className="model-container">
                <p className="para-text">Are you sure, you want to logout?</p>
                <div>
                  <button
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                    className="close-button"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="confirm-button"
                    onClick={onClickLogout}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <FcHome size={25} />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/reminder" className="nav-link">
              <BiNotification size={25} />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/hospital" className="nav-link">
              <FaHospitalSymbol size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
