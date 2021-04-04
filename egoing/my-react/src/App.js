import React, { useState, useEffect } from 'react'
import './App.css'
import DisplayNumberRoot from './components/DisplayNumberRoot'
import AddNumberRoot from './components/AddNumberRoot'

function App() {
    return (
        <div>
            <h1>Root</h1>
            <AddNumberRoot />
            <DisplayNumberRoot />
        </div>
    )
}


export default App
