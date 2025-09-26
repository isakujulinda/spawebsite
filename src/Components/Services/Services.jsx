import React from 'react'
import './Services.css'
// import service_1 from '../../assets/images/masazh.jpg'
// import service_2 from '../../assets/images/trajtim.jpg'
// import service_3 from '../../assets/images/sauna.jpg'
// import service_icon_1 from '../../assets/images/body-massage.png'
// import service_icon_2 from '../../assets/images/facial-massage.png'
// import service_icon_3 from '../../assets/images/spa.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src="https://placehold.co/400" alt="Service 1" />
        <div className="caption">
          <img src="https://placehold.co/100/000000/FFF" alt="Masazh Icon" />
          <p>Lorem ipsum</p>
        </div>
      </div>

      <div className='service'>
        <img src="https://placehold.co/400" alt="Service 2" />
        <div className="caption">
          <img src="https://placehold.co/100/000000/FFF" alt="Trajtime Icon" />
          <p>Lorem ipsum</p>
        </div>
      </div>

      <div className='service'>
        <img src="https://placehold.co/400" alt="Service 3" />
        <div className="caption">
          <img src="https://placehold.co/100/000000/FFF"alt="Spa Icon" />
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Services
