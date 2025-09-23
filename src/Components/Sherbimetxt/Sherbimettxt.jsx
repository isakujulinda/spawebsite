import React from 'react'
import './Sherbimettxt.css'
import { Link } from "react-router-dom";

function Sherbimettxt() {
  const paketat = [
    {
      titull: "Spa e Shpejtë – 35 €",
      pershkrim: [
        "Masazh terapeutik (30 min)",
        "Manikyr & Pedikyr",
        "Trajtim ekspres fytyre",
      ],
    },
    {
      titull: "Paketa Mini – 50 €",
      pershkrim: [
        "Masazh terapeutik (60 min)",
        "Manikyr",
        "Pedikyr",
        "Trajtim ekspres fytyre",
      ],
    },
    {
      titull: "Paketa Evropiane – 55 €",
      pershkrim: [
        "Masazh i Plotë Trupi (30 min)",
        "Trajtim evropian i fytyrës",
        "Pedikyr Spa",
        "Manikyr",
      ],
    },
    {
      titull: "Rigjenerim Total – 65 €",
      pershkrim: [
        "Masazh i Plotë Trupi (30 min)",
        "Trajtim katër shtresor për fytyrën",
        "Pedikyr Detox me çaj jeshil",
        "Manikyr",
      ],
    },
    {
      titull: "Rilindja – 85 €",
      pershkrim: [
        "Masazh terapeutik (60 min)",
        "Mikrodermabrasion + Maskë speciale (4 shtresa)",
        "Manikyr & Pedikyr",
      ],
      },
    {
      titull: "Larg Zhurmes – 90 €",
      pershkrim: [
        "Masazh i Plotë Trupi (60 min)",
        "Trajtim fytyre Collagen 90-II ose Hydro Lifting ",
        "Manikyr Spa & Pedikyr Spa",
      ],
      },
    {
      titull: "Oaz Harmonie – 95 €",
      pershkrim: [
        "Masazh me vajra aromatikë (60 min)",
        "Trajtim hidratues i fytyrës me maskë natyrale",
          "Pedikyr Spa relaksues",
        "Çaj bimor pas seancës",
      ],
    },
    {
      titull: "Aura Signature – 100 €",
      pershkrim: [
        "Masazh i Plotë Trupi (60 min)",
        "Mikrodermabrasion ose Trajtim foto për sytë",
        "Manikyr Spa & Pedikyr me parafinë",
      ],
    },
    {
      titull: "Kënaqësi e Përsosur – 120 €",
      pershkrim: [
        "Masazh me gurë të ngrohtë ose topa bimorë tajlandezë (60 min)",
        "Mikrodermabrasion fytyre + Maskë kolagjeni (90 min)",
        "Manikyr Spa & Pedikyr Organik",
      ],
    },
  ];

  return (
    <div className='sherbimet'>
      {paketat.map((paketa, index) => (
        <div className="package" key={index}>
          <h3>{paketa.titull}</h3>
          <ul>
            {paketa.pershkrim.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
          <Link to="/kontakto" className="btn-rezervo">Rezervo Tani</Link>
        </div>
      ))}
    </div>
  )
}

export default Sherbimettxt
