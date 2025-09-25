import React from 'react'
import './Section2.css'
import section2 from '../../assets/images/ab2.jpg'

function Section2() {
  return (
    <div className='section2'>
      <div className="section2-left">
        <h3>Çfarë na dallon nga të tjerët</h3>
        <p>
          Në Aura Spa, kujdesi për trupin dhe shpirtin nuk është thjesht një shërbim, por një përvojë unike dhe e sigurt. Ne jemi të përkushtuar të ofrojmë cilësi të lartë, higjienë maksimale dhe relaks total për çdo klient që na zgjedh.
        </p>
        <br />
        <p>Atmosfera jonë e qetë, shërbimet e personalizuara, standardet e rrepta të pastërtisë dhe stafi ynë i trajnuar profesionalisht bëjnë që çdo vizitë të jetë e veçantë. Me përkushtim në çdo detaj, synimi ynë është të krijojmë një hapësirë ku ndiheni të relaksuar, të rigjeneruar dhe në harmoni me veten.</p>

      </div>

      <div className="section2-right">
        <img src={section2} alt="Ambient i qetë" className='section2-img' />
      </div>
    </div>
  )
}

export default Section2
