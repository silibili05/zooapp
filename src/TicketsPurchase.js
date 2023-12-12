import React, { useState } from 'react';

export function TicketsPurchase() {
    const [persons, setPersons] = useState('');
    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setPersons(event.target.value);
        setCode(generateCode(event.target.value));
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
        </div>
    );
}
