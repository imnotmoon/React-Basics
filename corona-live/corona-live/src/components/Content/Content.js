import React from 'react'
import './Content.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Vaccine from '../Vaccine/Vaccine'
import World from '../World/World'
import SocialDistancing from '../SocialDistancing/SocialDistancing'
import FAQ from '../FAQ/FAQ'

function ContentRouter() {
    return (
        <>
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route exact path="/world" component={World} />
                <Route exact path="/vaccine" component={Vaccine} />
                <Route exact path="/social-distancing" component={SocialDistancing} />
                <Route exact path="/faq" component={FAQ} />
            </div>
        </>
    )
}

export default ContentRouter
