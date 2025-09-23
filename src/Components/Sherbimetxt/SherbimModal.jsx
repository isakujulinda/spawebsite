import React, { useState, useEffect } from 'react';
import './SherbimModal.css';

const SherbimModal = ({ paketaTitull, onClose }) => {
    const [result, setResult] = useState("");

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Duke dërguar...");

        const form = new FormData(event.target);
        form.append("access_key", "f6c68773-51ef-41a9-bfa9-c3a0f0212e46");
        form.append("paketa", paketaTitull);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form
            });

            const data = await response.json();

            if (data.success) {
                setResult("Formulari u dërgua me sukses!");
                setTimeout(() => {
                    onClose();
                }, 2000);
            } else {
                console.error("Error", data);
                setResult("Ndodhi një gabim, ju lutem provoni përsëri");
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Ndodhi një gabim, ju lutem provoni përsëri");
        }
    };

    const timeOptions = [
        "Zgjidhni orarin", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00"
    ];

    return (
        <div className="modal-container">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <h2>Rezervo shërbimin: <br/>{paketaTitull}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Emri dhe Mbiemri</label>
                    <input type="text" name='emri' placeholder='Shkruani emrin tuaj' required />
                    
                    <label>Numri i Telefonit</label>
                    <input type="tel" name='telefon' placeholder='Vendosni numrin tuaj të telefonit' required />
                    
                    <label>Zgjidhni orarin</label>
                    <select name="orari" required>
                        {timeOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                    
                    <label>Shënime</label>
                    <textarea name="mesazhi" rows="1" placeholder='Shtoni shënime (opsionale)'></textarea>
                    
                    <button type='submit' className='btn-rezervo'>Dërgo Rezervimin</button>
                </form>
                <span className="form-status">{result}</span>
                <button className="close-modal-btn" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
};

export default SherbimModal;