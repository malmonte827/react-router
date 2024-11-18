import React from 'react'
import { Link } from 'react-router-dom'
import "./Chips.css"

function Chips(){
    return(
        <div>
            <p>We have chips</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default Chips