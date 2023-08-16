import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import HospitalItem from '../HospitalItem'

import './index.css'

const hospitalsList = [
  {
    id: '1',
    name:
      'Medicover Woman and Child Hospital in Hyderabad | Best Gynaecologist',
    location: 'Hospital in Hyderabad, Telangana',
    ratting: '4.8',
    website:
      'https://www.medicoverhospitals.in/hospitals/telangana/hyderabad/woman-and-child/?utm_source=GMB&utm_medium=organic&utm_campaign=Woman-and-Child',

    Phone: '040 6833 4455',
    imageUrl:
      'https://res.cloudinary.com/dyu5n5spk/image/upload/v1692080858/2022-02-04_cwzvx0.jpg',
  },
  {
    id: '2',
    name: 'KIMS Cuddles - Best Maternity & Pediatric Hospital in Kondapur',
    location: 'Hospital in Hyderabad, Telangana',
    ratting: '4.8',
    website: 'https://kimscuddles.com/',
    Phone: '040 7123 7123',
    imageUrl:
      'https://res.cloudinary.com/dyu5n5spk/image/upload/v1692081229/VISH3367_l6polr.jpg',
  },
  {
    id: '3',
    name: ' Ramaiah Memorial Hospital ',
    location: 'Hospital in Bangalore, Karnataka',
    ratting: '4.7',
    website: 'https://msrmh.com/',
    Phone: '1800 123 1133',
    imageUrl:
      'https://res.cloudinary.com/dyu5n5spk/image/upload/v1692086642/abt_ezyfsb.jpg',
  },
  {
    id: '4',
    name: 'Aster Women & Children Hospital',
    location: 'Maternity centre in Bengaluru, Karnataka',
    ratting: '4.8',
    website:
      'https://www.asterhospitals.in/hospitals/aster-women-children-bangalore',
    Phone: '080 4510 8888',
    imageUrl:
      'https://res.cloudinary.com/dyu5n5spk/image/upload/v1692087446/_D9A2426_lpcko9.jpg',
  },
]

class BestHospital extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="hospital-container">
          <h1 className="heading"> Hospital</h1>
          <ul className="hospital-list-container">
            {hospitalsList.map(eachHospital => (
              <HospitalItem
                key={eachHospital.id}
                hospitalsDetails={eachHospital}
              />
            ))}
          </ul>
        </div>
        <Footer />
      </>
    )
  }
}

export default BestHospital
