import React from 'react'
import { Link } from 'react-router-dom'
import "./Sardines.css"

function Sardines(){
    return(
        <div>
            <p>We have sardines</p>
            <Link to="/">Go Back</Link>

        </div>
    )
}

export default Sardines