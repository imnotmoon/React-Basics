import React, { useState, useEffect } from 'react'
import store from '../store'

export default function DisplayNumber() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        store.subscribe(function () {
            setNumber(store.getState().number)
        })
    }, [])

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={number} readOnly />
        </div>
    )
}