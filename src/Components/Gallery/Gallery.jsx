import React from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/images/gallery-1.jpg'
import gallery_2 from '../../assets/images/gallery-2.jpg'
import gallery_3 from '../../assets/images/gallery-3.jpg'
import gallery_4 from '../../assets/images/gallery-4.jpg'

const Gallery = () => {
  return (
      <div className='gallery'>
          <div className="galeries">
              <img src={gallery_1} alt="" />
              <img src={gallery_2} alt="" />
              <img src={gallery_3} alt="" />
              <img src={gallery_4} alt="" />
          </div>
      <button className='btn dark-btn'>Shiko me shume</button>
    </div>
  )
}

export default Gallery
