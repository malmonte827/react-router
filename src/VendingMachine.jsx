import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
    return (
        <>
            <div className="VendingMachine">
                <h1>Hello what would you like</h1>
            </div>
            <div className="items">
                <Link to="/Chips">Chips</Link>
                <Link to="/Soda">Soda</Link>
                <Link to="/Sardines">Sardines</Link>
            </div>
        </>
    );
}

export default VendingMachine;
