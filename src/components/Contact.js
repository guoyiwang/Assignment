import React from 'react'
import "./Contact.scss"
import ic_comment from '../assets/ic/black/ic_comment.png'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactDetail">
                <span id="supportCenter">Support Center</span>
                <span id="plattNumber">800-25-Platt</span>
                <span id="phoneNumber">800-257-5288</span>
                <span id="dayTime">4 a.m. - 12 a.m. (pst)</span>
                <span id="weekTime">7 Days a week</span>
            </div>
            <Link id="chatLink">
                <img src={ic_comment} alt="ic_comment"></img>
                <span>Live Help</span>
            </Link>
            <div className="mutilLink">
                <Link>Contact Us</Link>
                <Link>What's New</Link>
                <Link>FAQ's</Link>
            </div>
        </div>
    )
}

export default Contact
