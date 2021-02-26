import React from 'react'
import ic_categories from '../assets/ic/black/ic_categories.png'
import ic_playlist_add_check from '../assets/ic/black/ic_playlist_add_check.png'
import ic_list from '../assets/ic/black/ic_list.png'
import ic_chat from '../assets/ic/black/ic_chat.png'
import ic_chat_active from '../assets/ic/green/ic_chat_active.png'
import ic_check_circle from '../assets/ic/black/ic_check_circle.png'
import ic_account from '../assets/ic/black/ic_account.png'
import ic_place from '../assets/ic/black/ic_place.png'
import ic_arrow_forward from '../assets/ic/black/ic_arrow_forward.png'
import './Categories.css'

function Categories() {
    return (
        <div className="all_categories">
            <div className="header_categories">
                <img src={ic_categories} alt="ic_categories"></img>
                <span>Shop all categories</span>
                <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
            </div>
            <div className="container_categories">
                <div className="categoryItem">
                    <img src={ic_playlist_add_check} alt="ic_playlist_add_check"></img>
                    <span>My Catalog</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem">
                    <img src={ic_list} alt="ic_list"></img>
                    <span>My List</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem" id="tabletViewCategory">
                    <img src={ic_chat} alt="ic_chat"></img>
                    <span>Live Help</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem" id="mobileViewCategory">
                    <img src={ic_chat_active} alt="ic_chat"></img>
                    <span>Live Help</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem">
                    <img src={ic_check_circle} alt="ic_check_circle"></img>
                    <span>PIM</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem">
                    <img src={ic_account} alt="ic_account"></img>
                    <span>Account</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
                <div className="categoryItem">
                    <img src={ic_place} alt="ic_place"></img>
                    <span>Branch Locations</span>
                    <img className="ic_arrow_forward" src={ic_arrow_forward} alt="ic_arrow_forward"></img>
                </div>
            </div>
            
        </div>
    )
}

export default Categories
