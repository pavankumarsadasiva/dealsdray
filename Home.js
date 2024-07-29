import React from "react";
import logo from '../images/deal.png';
import '../css/home.css'
// import {  Link } from "react-router-dom"
function Home(){
    return(
        <div>
            <div className="home1">  
                <div className="logo1">
                    <img src={logo} alt="deal" />

                </div>
                <div className="home2">
                    <ul>
                        <li>
                        Home
                        </li>
                        <li>Employee List</li>
                        <li>HuKum Guptha-</li>
                        <li style={{color:"skyblue"} }>LogOut</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;