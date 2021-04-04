/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react'
import DisplayNumber from '../components/DisplayNumber'
import store from '../store'

export default () => {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        store.subscribe(() => {
            setNumber(store.getState().number)
        })
    }, [])


    return (
        <DisplayNumber value={number}></DisplayNumber>
    )
}