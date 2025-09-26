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
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Spa e Shpejtë – 35 €")}>
          Rezervo 
        </button>
      </div>

      <div className="package">
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Paketa Mini – 50 €")}>
          Rezervo 
        </button>
      </div>

      <div className="package">
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Paketa Evropiane – 55 €")}>
          Rezervo 
        </button>
      </div>

      <div className="package">
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Rigjenerim Total – 65 €")}>
          Rezervo 
        </button>
      </div>

      <div className="package">
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Rilindja – 85 €")}>
          Rezervo 
        </button>
      </div>

      <div className="package">
        <h3>Lorem ipsum dolor-sit amet.</h3>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button className="btn-rezervo" onClick={() => openModal("Aura Signature – 100 €")}>
          Rezervo 
        </button>
      </div>


      {modalOpen && (
        <SherbimModal paketaTitull={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
}

export default Sherbimettxt;
