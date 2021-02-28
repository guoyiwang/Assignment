import React from 'react'
import datacomm from '../assets/img/datacomm.png'
import hvac from '../assets/img/hvac.png'
import industrial from '../assets/img/industrial.png'
import lighting from '../assets/img/lighting.png'
import energy from '../assets/img/energy.png'
import utility from '../assets/img/utility.png'

import ic_line_style from '../assets/ic/green/ic_line_style.png'
import ic_search from '../assets/ic/green/ic_search.png'
import ic_scanner from '../assets/ic/green/ic_scanner.png'
import platt_plus from '../assets/img/platt_plus.png'
import deal from '../assets/panel/deal.png'
import product_11 from '../assets/recent/11.png'
import product_22 from '../assets/recent/22.png'

import super_tool_day from '../assets/img/super_tool_day.png'
import ic_location_b from '../assets/img/ic_location_b.png'
import ic_helpcenter from '../assets/img/ic_helpcenter.png'
import ic_platt_u from '../assets/img/ic_platt_u.png'

import app_get_banner from '../assets/panel/app_get_banner.png'

import "./Market.css"
import { Link } from 'react-router-dom'

function Market() {
    return (
        <div className="MarketContainer">
            <div className="tabletViewMarket">
                <div className="headerMarket">
                    <span>Product Markets</span>
                </div>
                <div className="contentMarket">
                    <div className="typeContainer">
                        <img src={datacomm} alt="datacomm"></img>
                        <span>DataComm</span>
                    </div>
                    <div className="typeContainer">
                        <img src={hvac} alt="hvac"></img>
                        <span>HVAC</span>
                    </div>
                    <div className="typeContainer">
                        <img src={industrial} alt="industrial"></img>
                        <span>Industrial</span>
                    </div>
                    <div className="typeContainer">
                        <img src={lighting} alt="lighting"></img>
                        <span>Lighting</span>
                    </div>
                    <div className="typeContainer">
                        <img src={energy} alt="energy"></img>
                        <span>Energy Efficiency</span>
                    </div>
                    <div className="typeContainer">
                        <img src={utility} alt="utility"></img>
                        <span>Utility</span>
                    </div>
                </div>
                
            </div>

            <div className="mobileViewMarket">
                <div className="toolContainer">
                    <div className="toolImg">
                        <img src={ic_line_style} alt="ic_line_style"></img>
                    </div>
                    <span>Categories</span>
                </div>
                <div className="toolContainer">
                    <div className="toolImg">
                        <img src={ic_search} alt="ic_search"></img>
                    </div>
                    <span>Search</span>
                </div>
                <div className="toolContainer">
                    <div className="toolImg">
                        <img src={ic_scanner} alt="ic_scanner"></img>
                    </div>
                    <span>Scan</span>
                </div>
            </div>

            <div className="adContainer">
                <div className="adOne">
                    <div className="adOneItem">
                        <img src={platt_plus} alt="platt_plus"></img>
                    </div>
                    <div className="adTwoItem">
                        <span>Get Started Today</span>
                        <span>Become a <span className="boldWord">Platt Plus</span> Member.</span>
                        <Link>
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="adThree">
                    <img src={deal} alt="deal"></img>
                </div>  
                <div className="adFour">
                    <div className="adFourHeader">
                        <span>Recently Viewed</span>
                        <Link>
                            View all
                        </Link>
                    </div>
                    <div className="adFourContainer">
                        <img src={product_11} alt="product_11"></img>
                        <img src={product_22} alt="product_22"></img>
                        <img src={product_22} alt="product_22"></img>
                    </div>
                </div>              
            </div>
            <div className="multiWebside">   
                <div className="webItem">
                    <img src={super_tool_day} alt="super_tool_day"></img>
                    <span>Super Tool Day & Dynamic Data Day</span>
                </div>
                <div className="webItem">
                    <img src={ic_location_b} alt="ic_location_b"></img>
                    <span>Branch Locations</span>
                </div>
                <div className="webItem">
                    <img src={ic_helpcenter} alt="ic_helpcenter"></img>
                    <span>Help Center</span>
                </div>
                <div className="webItem">
                    <img src={ic_platt_u} alt="ic_platt_u"></img>
                    <span>Platt University</span>
                </div>
            </div>
            <div className="appContainer">
                <img src={app_get_banner} alt="app_get_banner"></img>
                <span>Shop better, download the Platt App today</span>
            </div>
            <div id="clearFormat"></div>
        </div>
    )
}

export default Market
