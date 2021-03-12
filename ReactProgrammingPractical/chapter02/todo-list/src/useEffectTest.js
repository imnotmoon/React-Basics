// practical code for useEffect

import React, { useState, useEffect } from 'react'

function MyComponent() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `업데이트 횟수 : ${count}`;
    }, [])

    return <button onClick={() => setCount(count+1)}>increase</button>
}

function MyComponent2({ userId }) {

    let getUserApi = (userId) => {
        return new Promise(null, null);
    }

    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserApi(userId).then(data => setUser(data))
    }, [userId])
}

export default MyComponent2
