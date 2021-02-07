import React from 'react'
import { Link } from "react-router-dom"
import './Navigation.css'

function Navigation() {
    return (
        <div className="nav">
            {/* Link를 사용하면 Refresh가 아님. 기본적으로 Html은 refresh */}
            {/* 1. Link는 Router 밖에서 쓸 수 없다.*/}
            
            <Link to="/">Home</Link>
            <Link to={{
                pathname: "/about",
                state : {
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    )
}

export default Navigation
