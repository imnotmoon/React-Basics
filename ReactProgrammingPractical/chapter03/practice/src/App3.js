import React, { useContext, useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './App.css'

const UserContext = React.createContext();
const user = {
    name: 'mike',
    age: 23,
}

function App3() {
    return (
        <div className="App">
            <ParentComponent />
            <Profile />
            <Profile2 />
            <Profile3 />
        </div>
    )
}

function ParentComponent() {
    return (
        <div>
            <UserContext.Provider value={user}>
                <ChildComponent />
            </UserContext.Provider>
        </div>
    )
}

const ChildComponent = () => {

    // useContext 훅으로 변수로써 값을 빼오는게 가능하다.
    // Context.Consumer 대신 사용. 훨씬 간단하다.
    const user = useContext(UserContext)

    return (
        <>
            <p>{`name is ${user.name}`}</p>
            <p>{`age is ${user.age}`}</p>
        </>
    )
}

// useRef : 렌더링과 무관한 값을 저장할 때 사용
// 렌더링에 영향을 안미치는 이전 상태값도 저장해야 하는 경우 useRef

// 1. setAge로 age가 변함
// 2. useEffect의 결과로 prevAgeRef의 값이 새로 저장
// 3. text 값 업데이트
function Profile() {
    const [age, setAge] = useState(20);
    const prevAgeRef = useRef(20);  // 상태값이긴 한데 이전 상태값이라서 렌더링에 영향을 안준다

    useEffect(() => {
        prevAgeRef.current = age; // 2
    }, [age])

    const prevAge = prevAgeRef.current;
    const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';    // 3
    return (
        <div >
            <p>{`age ${age} is ${text} than age ${prevAge} `}</p>
            <button onClick={() => {
                const age = Math.floor(Math.random() * 50 + 1);
                setAge(age); // 1
            }}>
                나이변경
            </button>
        </div>
    )
}


// useRef 안쓰고 그냥 해봤는데 prefAge가 이전 age 값을 저장은 하지만
// 렌더링 다시 될때마다 초기화된다.
// useRef를 통해서 가지고있어야함...
const Profile2 = () => {
    const [age, setAge] = useState(20)
    const prevAgeRef = useRef(20);

    useEffect(() => {
        prevAgeRef.current = age
    }, [age])

    const prevAge = prevAgeRef.current
    const text = age === prevAge ? "same as" : age > prevAge ? "older than" : "younger than"

    return (
        <div>
            <p>{`age ${age} is ${text} age ${prevAge}`}</p>
            <button onClick={() => {
                const age = Math.floor(Math.random() * 50 + 1)
                setAge(age)
            }}>나이 변경</button>
        </div >
    )
}


// useMemo
// 캐싱 + dependency

function Mycomponent({ v1, v2 }) {
    const runExpensiveJob = (a, b) => {
        // 계산량이 굉장히 많은 함수라고 치자..
    }
    // 첫번째 인자 : 함수
    // 두번째 인자 : dependency 배열
    // dependency가 바뀌지 않는 이상 함수의 '값'만 기억한다
    const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2])

    return (
        <p>the value is {value}</p>
    )
}


// useCallback
// useMemo가 함수의 반환값같이 어떤 값을 저장하는거라면
// useCallback은 함수 자체를 저장한다 + dependency가 변하면 함수도 다시 정의

// 가상의 컴포넌트
const UserEdit = ({ onSave, setName, setAge }) => <div></div>

const Profile3 = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(20);

    const saveToServer = () => {
        // 가상의 함수
    }

    const onSave = useCallback(() => {
        saveToServer(age, name)
    }, [age, name])

    return (
        <div>
            <p>{`name is ${name}`}</p>
            <p>{`age is ${age}`}</p>

            {/* useCallback이 없으면 onSave에 함수를 직접 넣을거고 */}
            {/* 그러면 불필요한 렌더링이 계속 일어남 */}
            <UserEdit onSave={onSave} setName={setName} setAge={setAge} />
        </div>
    )
}

export default App3
