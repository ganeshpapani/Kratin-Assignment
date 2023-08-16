import './index.css'

const HospitalItem = props => {
  const {hospitalsDetails} = props
  const {name, location, ratting, website, Phone, imageUrl} = hospitalsDetails

  return (
    <li className="hospital-list">
      <div className="hospital-text-container">
        <h1 className="name">{name}</h1>
        <div className="location-container">
          <p className="location">{location}</p>
          <p className="ratting">
            Ratting: <span className="span"> {ratting}</span>
          </p>
        </div>
        <div className="location-container">
          <a href={website}>Visit Website</a>
          <p className="phone">
            Phone: <span className="span">{Phone}</span>
          </p>
        </div>
      </div>
      <img src={imageUrl} className="image" alt={name} />
    </li>
  )
}

export default HospitalItem
