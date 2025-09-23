import React, { useState } from 'react';
import './Sherbimettxt.css';
import SherbimModal from './SherbimModal';

function Sherbimettxt() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openModal = (paketa) => {
    setSelectedPackage(paketa);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPackage("");
  };

  return (
    <div className='sherbimet'>
      <div className="package">
        <h3>Spa e Shpejtë – 35 €</h3>
        <ul>
          <li>Masazh terapeutik (30 min)</li>
          <li>Manikyr & Pedikyr</li>
          <li>Trajtim ekspres fytyre</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Spa e Shpejtë – 35 €")}>
          Rezervo Tani
        </button>
      </div>

      <div className="package">
        <h3>Paketa Mini – 50 €</h3>
        <ul>
          <li>Masazh terapeutik (60 min)</li>
          <li>Manikyr</li>
          <li>Pedikyr</li>
          <li>Trajtim ekspres fytyre</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Paketa Mini – 50 €")}>
          Rezervo Tani
        </button>
      </div>

      <div className="package">
        <h3>Paketa Evropiane – 55 €</h3>
        <ul>
          <li>Masazh i Plotë Trupi (30 min)</li>
          <li>Trajtim evropian i fytyrës</li>
          <li>Pedikyr Spa</li>
          <li>Manikyr</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Paketa Evropiane – 55 €")}>
          Rezervo Tani
        </button>
      </div>

      <div className="package">
        <h3>Rigjenerim Total – 65 €</h3>
        <ul>
          <li>Masazh i thellë i indeve (30 min)</li>
          <li>Trajtim katër shtresor për fytyrën</li>
          <li>Pedikyr Detox me çaj jeshil</li>
          <li>Manikyr</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Rigjenerim Total – 65 €")}>
          Rezervo Tani
        </button>
      </div>

      <div className="package">
        <h3>Rilindja – 85 €</h3>
        <ul>
          <li>Masazh terapeutik (60 min)</li>
          <li>Mikrodermabrasion + Maskë speciale (4 shtresa)</li>
          <li>Manikyr & Pedikyr</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Rilindja – 85 €")}>
          Rezervo Tani
        </button>
      </div>

      <div className="package">
        <h3>Aura Signature – 100 €</h3>
        <ul>
          <li>Masazh i thellë i indeve (60 min)</li>
          <li>Mikrodermabrasion ose Trajtim foto për sytë</li>
          <li>Manikyr Spa & Pedikyr me parafinë</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Aura Signature – 100 €")}>
          Rezervo Tani
        </button>
      </div>


      {modalOpen && (
        <SherbimModal paketaTitull={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
}

export default Sherbimettxt;
