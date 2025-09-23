import React, { useState } from 'react';
import './BlogModal.css';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import blog4 from '../../assets/images/blog4.jpg';

export default function BlogModal() {
  const [modal, setModal] = useState(null);

  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "Pse janë të rëndësishme trajtimet faciale?",
      text: "Rëndësia e Skin Care në AURA SPA. Skin Care është më shumë se një rutinë; është një formë e dashurisë për veten dhe fuqizimit. Lëkura e çdo individi është unike dhe kjo është arsyeja pse shërbimet tona të Skin Care janë të personalizuara për të synuar shqetësimet tuaja specifike. Nga trajtimi i akneve deri te terapitë kundër plakjes, specialistët tanë janë të përkushtuar t’ju ndihmojnë të arrini lëkurë të shëndetshme."
    },
    {
      id: 2,
      image: blog2,
      title: "Çfarë është një Medical Spa?",
      text: "Një medical spa është një strukturë luksoze që bashkon qetësinë dhe kënaqësinë e një spa tradicionale me shërbimet dhe ekspertizën e avancuar të një klinike mjekësore. Qëllimi i një medical spa është të ofrojë një shumëllojshmëri trajtimesh estetike dhe të orientuara drejt shëndetit nën mbikëqyrjen e profesionistëve të licencuar mjekësorë. Shërbimet tona medical spa janë krijuar për të përmbushur nevojat tuaja unike, duke adresuar shqetësimet nga lehtësimi i stresit deri tek përtëritja e lëkurës."
    },
    {
      id: 3,
      image: blog3,
      title: "Epilimi me Lazer",
      text: "EEpilim me Lazer është një pjesë e rëndësishme e rutinës së kujdesit për lëkurën, por kur bëhet në mënyrë profesionale, rezultatet janë shumë më të mira. Në këtë postim do të diskutojmë procesin e epilimit me lazer, përfitimet e tij dhe si ndikon në shëndetin e lëkurës suaj."
    },
    {
      id: 4,
      image: blog4,
      title: "Eksperienca Unike",
      text: "Ajo që e dallon spa tonë nga të tjerët është angazhimi ynë për të krijuar një mjedis ku lulëzon relaksimi. Që në momentin që hyni në AURA SPA, do të mbështilleni nga një atmosferë e qetë që ju bën thirrje të çlodheni. Aromat qetësuese, muzika qetësuese dhe dekori i ngrohtë e tërheqës të gjitha kontribuojnë në përvojën tonë unike të spa.Ekipi ynë i profesionistëve të trajnuar është i përkushtuar për të ofruar kujdes dhe vëmendje të personalizuar, duke siguruar që koha juaj në spa të jetë sa e këndshme dhe efektive."
    }
  ];

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal(null);

  const activeBlog = blogs.find((blog) => blog.id === modal);

  return (
    <div className="blog-container">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item"
            onClick={() => openModal(blog.id)}
          >
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div className="modal">
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <h2>{activeBlog.title}</h2>
            <p>{activeBlog.text}</p>
            <button className="close-modal" onClick={closeModal}>
              Mbyll
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
