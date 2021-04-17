import React, { useEffect, useState } from 'react'
import { request } from '../../networking/Axios.ts'
import './Today.css'

export default function Today() {

    const [today, setToday] = useState(0)

    useEffect(() => {
        request('https://api.covid19api.com/dayone/country/south-korea/status/confirmed', 'GET', {})
    }, [])

    return (
        <div className="today box">
            <div className="today__today box">
                <div className="today__today__count">
                    <div style={{ 'color': '#707882', 'fontSize': '13px', 'paddingBottom': '10px' }}>오늘 확진자수</div>
                    <div style={{ 'fontSize': '2.3rem', 'fontWeight': '300' }}><div style={{ 'fontWeight': '600', 'display': 'inline' }}>296</div>명</div>
                </div>
                <div className="today__versus">
                    <div style={{ 'width': '30%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around' }}>
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '100%' }}>
                            <div style={{ 'display': 'inline-block' }}>vs 어제</div>
                            <span className="versus__smallbox">
                                <span>121</span>
                                <span>up</span>
                            </span>
                        </div>
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '100%' }}>
                            <div style={{ 'display': 'inline-block' }}>vs 1주전</div>
                            <span className="versus__smallbox">
                                <span>46</span>
                                <span>up</span>
                            </span>
                        </div>
                    </div>
                    <div style={{ 'width': '30%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around' }}>
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '100%' }}>
                            <div style={{ 'display': 'inline-block' }}>vs 어제</div>
                            <span className="versus__smallbox">
                                <span>121</span>
                                <span>up</span>
                            </span>
                        </div>
                        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'width': '100%' }}>
                            <div style={{ 'display': 'inline-block' }}>vs 1주전</div>
                            <span className="versus__smallbox">
                                <span>46</span>
                                <span>up</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="today__alert">
                <Today_alert />
            </div>

        </div>
    )
}

const Today_alert = () => {
    return (
        <div className="alert__container">
            <div className="alert__content">
                <div style={{ 'color': '#707882' }}>4시간 전</div>
                <div>
                    <span>경기 전체</span>
                    <span>8명 추가 확진</span>
                </div>
                <div>></div>
            </div>
        </div>
    )
}