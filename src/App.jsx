import React from "react";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Sardines from "./Sardines"
import Chips from "./Chips";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/Soda" element={<Soda />} />
                    <Route path="/Chips" element={<Chips />} />
                    <Route path="/Sardines" element={<Sardines />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
