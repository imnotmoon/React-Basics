import React, { useState, useEffect } from 'react'
import store from '../store'

export default function DisplayNumber({ value }) {

    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={value} readOnly />
        </div>
    )
}