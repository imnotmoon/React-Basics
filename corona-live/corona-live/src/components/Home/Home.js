import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <div className="overview box">
                <div className="overview__item">
                    <div>확진자</div>
                    <div>106,230</div>
                    <div>478</div>
                    <div>up</div>
                </div>
                <div className="overview__item">
                    <div>사망자</div>
                    <div>1,752</div>
                    <div>4</div>
                    <div>up</div>
                </div>
                <div className="overview__item">
                    <div>완치자</div>
                    <div>97,363</div>
                    <div>463</div>
                    <div>up</div>
                </div>
                <div className="overview__item">
                    <div>검사자</div>
                    <div>7,921,290</div>
                    <div>52,470</div>
                    <div>up</div>
                </div>
            </div>

            {/* TODAY */}
            <div className="today box">
                <div className="today__today box">
                    <div>
                        <div>오늘 확진자수</div>
                        <div><div>296</div>명</div>
                    </div>
                    <div className="today__versus">
                        <div>
                            <div>
                                <div>vs 어제</div>
                                <span>
                                    <div>121</div>
                                    <div>up</div>
                                </span>
                            </div>
                            <div>
                                <div>vs 1주전</div>
                                <span>
                                    <div>46</div>
                                    <div>up</div>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>vs 어제</div>
                                <span>
                                    <div>121</div>
                                    <div>up</div>
                                </span>
                            </div>
                            <div>
                                <div>vs 1주전</div>
                                <span>
                                    <div>46</div>
                                    <div>up</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="today__alert">

                </div>

            </div>
        </div>
    )
}

export default Home
