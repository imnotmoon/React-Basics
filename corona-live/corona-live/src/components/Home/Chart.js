import React, { useState, useContext } from 'react'

const GraphContext = React.createContext()

function Chart() {

    const [charts, setCharts] = useState(1)

    return (
        <GraphContext.Provider value={{ charts, setCharts }} >
            <div>
                {/* map : 그래프 개수만큼 그래프 컴포넌트 추가 */}
                {[...Array(charts)].map((n, index) => {
                    return (
                        <HomeLineGraph />
                    )
                })}

                <AddGraph />
            </div>
        </GraphContext.Provider>
    )
}

function HomeLineGraph() {
    return (
        <div>
            그래프입니다
        </div>
    )
}

function AddGraph() {

    let { charts, setCharts } = useContext(GraphContext)

    const onClick = (e) => {
        e.preventDefault()
        setCharts(charts += 1)
    }

    return (
        <div onClick={onClick}>
            <button>추가하기</button>
        </div>
    )
}

export default Chart
