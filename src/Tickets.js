import React, { useState } from 'react';
import QRCode from 'qrcode.react';

export function Tickets() {
    const [numberOfPersons, setNumberOfPersons] = useState(10);

    const handleChange = (e) => {
        setNumberOfPersons(e.target.value);
    };

    const value = `Number of persons: ${numberOfPersons}`;

    return (
        <div>
            <h2>Deine Tickets</h2>
            <input
                type="number"
                value={numberOfPersons}
                onChange={handleChange}
            />
            <QRCode value={value} />
        </div>
    );
}

