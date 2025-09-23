import React from 'react'
import './Section1.css'
import sectin1 from '../../assets/images/ab1.jpg'

function Section1() {
  return (
      <div className='section1'>
          <div className="section1-left">
              <img src={sectin1} alt=""  className='section1-img'/>
          </div>
          <div className="section1-right">
              <h3>AURA SPA</h3>
              <br />
              <p>Aura Spa është një destinacion i dedikuar për relaks dhe mirëqenie, i vendosur në zemër të Tiranës. Me një staf profesionist dhe përvojë shumëvjeçare, ne kemi krijuar një hapësirë ku qetësia, kujdesi dhe harmonia bashkohen për të ofruar përvoja të paharrueshme.</p>
              <br />
              <p>Që prej fillimit, Aura Spa ka mirëpritur një klientelë të larmishme – nga profesionistë të zënë, deri te vizitorë që kërkojnë çlodhje dhe rigjenerim. Çdo shërbim është menduar me kujdes për të përmbushur nevojat e secilit klient, duke ofruar një standard të lartë cilësie dhe përkujdesjeje.</p>
              <br />
              <p>Pavarësisht nëse zgjidhni një masazh relaksues apo një trajtim luksoz, në Aura Spa do të gjeni gjithmonë shërbimin më të mirë dhe një eksperiencë që tejkalon pritshmëritë.</p>
      </div>
    </div>
  )
}

export default Section1
