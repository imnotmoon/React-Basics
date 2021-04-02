import React, { useRef, useState, useEffect, useCallback } from 'react'

function App() {
    return (
        <div>
            <Form />
            <Form2 />
            <br />
            <Form3 />
        </div>
    )
}

const TextInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
            <button>저장</button>
        </div>
    )
})

function Form() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <TextInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>텍스트로 이동.</button>
        </div>
    )
}


// 어려움
function Form2() {
    const [text, setText] = useState(INITIAL_TEXT);
    const [showText, setShowText] = useState(true);

    const setInitialText = useCallback(ref => ref && setText(INITIAL_TEXT), []);

    return (
        <div>
            {showText && (
                <input
                    type="text"
                    ref={setInitialText}
                    value={text}
                    onChange={e => setText(e.target.value)}>
                </input>
            )}
            <button onClick={() => setShowText(!showText)}>보이기/가리기</button>
        </div>
    )
}

const INITIAL_TEXT = "안녕하세요"


// ref 속성값 사용시 주의할 점 : 조건문에 따라 ref가 없을수도 있음
function Form3() {
    const inputRef = useRef();
    const [showText, setShowText] = useState(true);

    return (
        <div>
            {showText && <input type="text" ref={inputRef} />}
            <button onClick={() => setShowText(!showText)}>
                텍스트 보이기/가리기
            </button>
            <button onClick={() => inputRef.current && inputRef.current.focus()}>텍스트로 이동</button>
        </div>
    )
}


export default App
