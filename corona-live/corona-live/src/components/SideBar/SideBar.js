import React, { useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './Sidebar.css'

function SideBar() {

    const [menuItems, setMenuItems] = useState()

    return (
        <div className="sidebar">
            <div className="sidebar__logo box">
                <p>CORONA LIVE</p>
            </div>
            {/* <Router> */}
            <div className="box">
                <ul>
                    <li>
                        <div className="menu__item item__focus">
                            <Link to="/">국내</Link>
                        </div>
                    </li>
                    <li>
                        <div className="menu__item">
                            <Link to="/world">세계</Link>
                        </div>
                    </li>
                    <li>
                        <div className="menu__item">
                            <Link to="/vaccine">백신</Link>
                        </div>
                    </li>
                    <li>
                        <div className="menu__item">
                            <Link to="/social-distancing">거리두기</Link>
                        </div>
                    </li>
                    <li>
                        <div className="menu__item">
                            <Link to="/faq">자주 묻는 질문</Link>
                        </div>
                    </li>
                </ul>
            </div>
            {/* </Router> */}

            <div className="box">
                <div className="is__dark">
                    <p>다크모드</p>
                    <input type="checkbox" />
                </div>
                <div>
                    제보하기
                </div>
            </div>
        </div>
    )
}

export default SideBar
