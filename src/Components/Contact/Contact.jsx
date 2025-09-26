import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/images/email-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Duke dërguar...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6c68773-51ef-41a9-bfa9-c3a0f0212e46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formulari u dërgua me sukses");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Ndodhi një gabim, ju lutem provoni përsëri");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Lorem ipsum dolor</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt excepturi sint doloremque esse, porro molestias voluptatum totam impedit maiores.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Email" /> contact@gmail.al</li>
          <li><img src={phone_icon} alt="Telefon" /> +355 12 34 567</li>
          <li><img src={location_icon} alt="Adresa" /> Tiranë, Shqipëri</li>
        </ul>
      </div>

      <form onSubmit={onSubmit}>
        <label>Emri Juaj</label>
        <input type="text" name='name' placeholder='Shkruani emrin tuaj' required />

        <label>Numri i Telefonit</label>
        <input type="tel" name='phone' placeholder='Vendosni numrin tuaj të telefonit' required />

        <label>Email</label>
        <input type="email" name='email' placeholder='Shkruani adresën tuaj të email-it' required />

        <label>Mesazhi Juaj</label>
        <textarea name="message" rows="6" placeholder='Shkruani mesazhin tuaj' required></textarea>

        <button type='submit' className='btn dark-btn'>Dërgo</button>
      </form>

      <span>{result}</span>
    </div>
  )
}

export default Contact;
