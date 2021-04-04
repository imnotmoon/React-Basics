import React, { useState } from 'react'

export default function AddNumber({ onClick }) {

    const [number, setNumber] = useState(0)

    const onChange = (event) => {
        setNumber(Number(event.currentTarget.value))
    }

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={() => { onClick(number) }} />
            <input type="text" value={number} onChange={onChange} onClick={(event) => event.currentTarget.value = null} />
        </div>
    )
}

//! Container Component
