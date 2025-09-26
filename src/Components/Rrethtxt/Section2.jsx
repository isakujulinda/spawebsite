import React from 'react'
import './Section2.css'
// import section2 from '../../assets/images/ab2.jpg'

function Section2() {
  return (
    <div className='section2'>
      <div className="section2-left">
        <h3>Tittle</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem nostrum iste pariatur consequatur error est mollitia, aspernatur voluptatum eveniet voluptatem, alias a eaque vel explicabo.
        </p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, a eligendi debitis rem nesciunt mollitia distinctio assumenda, molestiae alias, quasi consectetur consequuntur maiores accusamus provident?</p>

      </div>

      <div className="section2-right">
        <img src="https://placehold.co/400x600/png" alt="Ambient i qetë" className='section2-img' />
      </div>
    </div>
  )
}

export default Section2
