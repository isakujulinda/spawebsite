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
        <h3>Na dërgo një mesazh</h3>
        <p>
          Mos hezitoni të na kontaktoni përmes formularit më poshtë ose duke përdorur informacionet tona të kontaktit.
          Çdo pyetje, sugjerim apo rezervim është i mirëpritur – ne jemi këtu për të kujdesur për mirëqenien tuaj.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Email" /> contact@auraspa.al</li>
          <li><img src={phone_icon} alt="Telefon" /> +355 68 123 4567</li>
          <li><img src={location_icon} alt="Adresa" /> Rruga e Hoxha Tasim, Tiranë, Shqipëri</li>
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
