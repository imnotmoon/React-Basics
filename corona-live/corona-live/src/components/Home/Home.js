import React from 'react'
import './Home.css'
import Today from '../Today/Today'
import Chart from './Chart'

function Home() {
    return (
        <div>
            <div className="overview box">
                <div className="overview__item">
                    <div className="overview__item__title">확진자</div>
                    <div className="overview__item__count" style={{ color: '#eb5374' }}>106,230</div>
                    <div className="overview__item__up" style={{ color: '#eb5374' }}>478</div>
                </div>
                <div className="overview__item">
                    <div className="overview__item__title">사망자</div>
                    <div className="overview__item__count" style={{ color: '#b7c1cc' }}>1,752</div>
                    <div className="overview__item__up" style={{ color: '#b7c1cc' }}>4</div>
                </div>
                <div className="overview__item">
                    <div className="overview__item__title">완치자</div>
                    <div className="overview__item__count" style={{ color: '#178a17' }}>97,363</div>
                    <div className="overview__item__up" style={{ color: '#178a17' }}>463</div>
                </div>
                <div className="overview__item">
                    <div className="overview__item__title">검사자</div>
                    <div className="overview__item__count" style={{ color: '#5673eb' }}>7,921,290</div>
                    <div className="overview__item__up" style={{ color: '#5673eb' }}>52,470</div>
                </div>
            </div>

            {/* TODAY */}
            <Today />

            {/* Chart */}
            <Chart />
        </div>
    )
}

export default Home
