import React, { useState, useEffect } from 'react'

function MyComponent2() {
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `업데이트 횟수 : ${count}`
    }, [count])

    console.log('render called');

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
            <WidthPrinter />
        </div>
    )
}

function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [])

    return <div>{`width is ${width}`}</div>
}

// setState()는 비동기로 처리되지만 순서가 보장된다.

// 훅 사용시 지켜야 할 규칙
// 1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
// 2. 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.


export default MyComponent2
