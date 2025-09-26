import React from 'react'
import { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/images/next-btn.png'
import back_icon from '../../assets/images/before-btn.png'
// import user_1 from '../../assets/images/8.png'
// import user_2 from '../../assets/images/9.png'
// import user_3 from '../../assets/images/10.png'
// import user_4 from '../../assets/images/11.png'

function Testimonials() {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {

        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
      <div className='testimonials'>
          <img src={next_icon} alt="" className='next-btn'  onClick={slideForward}/>
          <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
          <div className="slider">
              <ul ref={slider}>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src="https://placehold.co/400x400/png" alt="" />
                              <div>
                                  <h3>Lorem, ipsum.</h3>
                                  <span>Lorem.</span>
                              </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo! Quasi voluptatibus debitis incidunt neque?</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src="https://placehold.co/400x400/png" alt="" />
                              <div>
                                  <h3>Lorem, ipsum.</h3>
                                  <span>Lorem.</span>
                              </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo! Quasi voluptatibus debitis incidunt neque?</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src="https://placehold.co/400x400/png" alt="" />
                              <div>
                                  <h3>Lorem, ipsum.</h3>
                                  <span>Lorem.</span>
                              </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo! Quasi voluptatibus debitis incidunt neque?</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src="https://placehold.co/400x400/png" alt="" />
                              <div>
                                  <h3>Lorem, ipsum.</h3>
                                  <span>Lorem.</span>
                              </div>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illo! Quasi voluptatibus debitis incidunt neque?</p>
                      </div>
                  </li>
              </ul>
    </div>
      </div>
  )
}

export default Testimonials
