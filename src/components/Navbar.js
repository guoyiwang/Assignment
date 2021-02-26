import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import ic_search from '../assets/ic/white/ic_search.png'
import ic_shopping_cart from '../assets/ic/white/ic_shopping_cart.png'
import ic_person from '../assets/ic/white/ic_person.png'
import ic_menu from '../assets/ic/white/ic_menu.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="narbar-container container">
                    <Link className="navbar-logo">
                        <img src={logo} alt=""></img>
                    </Link>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link className="nav-links">
                                <img src={ic_search} alt=""></img>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">
                                <img src={ic_shopping_cart} alt=""></img>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">
                                <img src={ic_person} alt=""></img>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-links">
                                <img src={ic_menu} alt=""></img>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar
