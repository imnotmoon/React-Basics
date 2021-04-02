// useRef 실습

import React, { useRef, useEffect } from 'react'

function TextInput() {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}></input>
            <button>저장</button>
        </div>
    )
}

export default TextInput
