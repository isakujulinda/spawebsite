import React from 'react'
import './Section2.css'
import section2 from '../../assets/images/ab2.jpg'

function Section2() {
  return (
    <div className='section2'>
      <div className="section2-left">
        <h3>Çfarë na dallon nga të tjerët</h3>
        <p>
          Në Aura Spa, ne besojmë se kujdesi për trupin dhe shpirtin duhet të jetë
          një përvojë e veçantë dhe e sigurt. Ajo që na dallon është përkushtimi
          ynë i vazhdueshëm ndaj cilësisë, higjienës dhe relaksit total që u
          ofrojmë klientëve tanë.
        </p>

        <ul className="features">
          <li>
            <strong>Ambient unik dhe i qetë</strong>
            <span>Krijuar për t’ju larguar nga zhurma e përditshme.</span>
          </li>
          <li>
            <strong>Shërbime të personalizuara</strong>
            <span>Çdo trajtim përshtatet sipas nevojave tuaja.</span>
          </li>
          <li>
            <strong>Standard i lartë higjiene</strong>
            <span>Çdo pajisje dhe hapësirë pastrohet dhe dezinfektohet rregullisht.</span>
          </li>
          <li>
            <strong>Staf i trajnuar profesionalisht</strong>
            <span>Teknikët tanë ndjekin trajnime të vazhdueshme për të ofruar eksperiencën më të mirë.</span>
          </li>
          <li>
            <strong>Cilësi & përkushtim</strong>
            <span>Në çdo detaj dhe atmosferë të ngrohtë që krijojmë.</span>
          </li>
        </ul>
      </div>

      <div className="section2-right">
        <img src={section2} alt="Ambient i qetë" className='section2-img' />
      </div>
    </div>
  )
}

export default Section2
