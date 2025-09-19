import React from 'react'
import { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/images/next-btn.png'
import back_icon from '../../assets/images/before-btn.png'
import user_1 from '../../assets/images/8.png'
import user_2 from '../../assets/images/9.png'
import user_3 from '../../assets/images/10.png'
import user_4 from '../../assets/images/11.png'

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
                              <img src={user_1} alt="" />
                              <div>
                                  <h3>Albana Kola</h3>
                                  <span>Arkitekte</span>
                              </div>
                          </div>
                          <p>"Një eksperiencë relaksi që më ndihmoi të shkëputem nga rutina e përditshme. Ambienti është i qetë dhe stafi shumë profesionist. Do të rikthehem patjetër."</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src={user_2} alt="" />
                              <div>
                                  <h3>Elira Dervishi</h3>
                                  <span>Mjeke Dermatologe</span>
                              </div>
                          </div>
                          <p>"Më pëlqeu shumë kujdesi i detajuar në trajtimet e fytyrës. Lëkura ime dukej më e freskët dhe e shëndetshme që pas seancës së parë."</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src={user_3} alt="" />
                              <div>
                                  <h3>Gentiana Hoxha</h3>
                                  <span>Menaxher Biznesi</span>
                              </div>
                          </div>
                          <p>"Pas një jave të lodhshme pune, masazhi relaksues te Aura Spa është ilaçi më i mirë. Profesionalizëm dhe qetësi absolute."</p>
                      </div>
                  </li>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src={user_4} alt="" />
                              <div>
                                  <h3>Sara Shehu</h3>
                                  <span>Fotografe</span>
                              </div>
                          </div>
                          <p>"Një vend perfekt për t’u përkujdesur për veten. Atmosfera e ngrohtë dhe shërbimet e personalizuara e bëjnë këtë spa ndryshe nga të tjerat."</p>
                      </div>
                  </li>
              </ul>
    </div>
      </div>
  )
}

export default Testimonials
