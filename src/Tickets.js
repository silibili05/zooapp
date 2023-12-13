// Tickets.js
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';


// Tickets.js
// ... (other imports and code)

export function Tickets() {
    const [numberOfPersons, setNumberOfPersons] = useState(10);
    const [storedCodes, setStoredCodes] = useState([]);

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const storedData = JSON.parse(localStorage.getItem('ticketData')) || {};
        setNumberOfPersons(storedData.numberOfPersons || 10);
    }, []);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setNumberOfPersons(newValue);

        // Save data to localStorage
        const dataToStore = { numberOfPersons: newValue };
        localStorage.setItem('ticketData', JSON.stringify(dataToStore));
    };

    useEffect(() => {
        // Update stored codes when numberOfPersons changes
        const newCode = `Number of persons: ${numberOfPersons}`;
        setStoredCodes(prevCodes => [...prevCodes, newCode]);

        // Save updated stored codes to localStorage
        localStorage.setItem('storedCodes', JSON.stringify([...storedCodes, newCode]));
    }, [numberOfPersons]); // Only re-run this effect when numberOfPersons changes

    return (
        <div>
            <h2>Tickets</h2>
            <p>Number of persons: {numberOfPersons}</p>
            {storedCodes.map((code, index) => (
                <div key={index}>
                    <QRCode value={code} />
                </div>
            ))}
        </div>
    );
}
