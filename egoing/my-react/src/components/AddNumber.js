import React, { useState } from 'react'
import store from '../store'

export default function AddNumber() {

    const [number, setNumber] = useState(0)

    const onClick = (event) => {
        event.preventDefault()
        store.dispatch({ type: 'INCREMENT', size: number })
    }

    const onChange = (event) => {
        setNumber(Number(event.currentTarget.value))
    }

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={onClick} />
            <input type="text" value={number} onChange={onChange} onClick={(event) => event.currentTarget.value = null} />
        </div>
    )
}