import React from "react"
import { Link } from "react-router-dom"


export default function Home() {
    return(
         
        <div className="container">
            <h1 className="title"> RECREATION: </h1> 
            <h2 className="subtitle"> what does it mean to you? </h2>
            <p>our National Parks are just the beginning</p>
            <p>explore some of 'the other' recreation areas</p> 
            <p>and find your next favorite 'happy place'</p>
            <Link to="/search">Search Recreation Areas</Link>
        </div>

    )
}