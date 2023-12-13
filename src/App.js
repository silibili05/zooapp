// App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tickets } from './Tickets';
import { TicketsPurchase } from './TicketsPurchase';

function App() {
    const [currentPage, setCurrentPage] = useState('tickets');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePurchaseComplete = () => {
        setCurrentPage('tickets');
    };

    return (
        <div className="App">
            {currentPage === 'tickets' && (
                <>
                    <Tickets />
                    <button onClick={() => handlePageChange('purchase')}>Go to Purchase Tickets</button>
                </>
            )}
            {currentPage === 'purchase' && (
                <TicketsPurchase onPurchaseComplete={handlePurchaseComplete} />
            )}
        </div>
    );
}

export default App;
