import logo from './logo.svg';
import './App.css';
import { Tickets } from './Tickets'
import React from "react";
import {TicketsPurchase} from './TicketsPurchase'

function App() {
  return (
    <div className="App">
      <Tickets/>
        <TicketsPurchase/>

    </div>
  );
}

export default App;
