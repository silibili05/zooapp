// TicketsPurchase.js
import React, { useState, useEffect } from 'react';

export function TicketsPurchase({ onPurchaseComplete }) {
    const [persons, setPersons] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const storedData = JSON.parse(localStorage.getItem('purchaseData')) || {};
        setPersons(storedData.numberOfPersons || '');
        setCode(generateCode(storedData.numberOfPersons));
    }, []);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setPersons(newValue);
        setCode(generateCode(newValue));
    };

    const handlePurchase = () => {
        // Save data to localStorage
        const dataToStore = { numberOfPersons: persons };
        localStorage.setItem('purchaseData', JSON.stringify(dataToStore));

        // Callback to inform parent component about the purchase completion
        onPurchaseComplete();
    };

    const generateCode = (numberOfPersons) => {
        // Your logic to generate a code based on the number of persons
        return `Code for ${numberOfPersons} persons`;
    };

    return (
        <div>
            <h2>Buy Tickets</h2>
            <input
                type="number"
                min="1"
                placeholder="Enter number of persons"
                value={persons}
                onChange={handleChange}
            />
            <p>Code: {code}</p>
            <button onClick={handlePurchase}>Abschließen</button>
        </div>
    );
}
