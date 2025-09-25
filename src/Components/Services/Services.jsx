import React from 'react'
import './Services.css'
import service_1 from '../../assets/images/masazh.jpg'
import service_2 from '../../assets/images/trajtim.jpg'
import service_3 from '../../assets/images/sauna.jpg'
import service_icon_1 from '../../assets/images/body-massage.png'
import service_icon_2 from '../../assets/images/facial-massage.png'
import service_icon_3 from '../../assets/images/spa.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={service_1} alt="Service 1" />
        <div className="caption">
          <img src={service_icon_1} alt="Masazh Icon" />
          <p>Masazhe Relaksuese</p>
        </div>
      </div>

      <div className='service'>
        <img src={service_2} alt="Service 2" />
        <div className="caption">
          <img src={service_icon_2} alt="Trajtime Icon" />
          <p>Trajtime për Lëkurën & Fytrën</p>
        </div>
      </div>

      <div className='service'>
        <img src={service_3} alt="Service 3" />
        <div className="caption">
          <img src={service_icon_3} alt="Spa Icon" />
          <p>Spa & Sauna Rituals</p>
        </div>
      </div>
    </div>
  )
}

export default Services
