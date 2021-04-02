import React, { useState } from 'react'

const UserContext = React.createContext('')

function ContextApi() {

    const [name, setName] = useState('mike')

    return (
        <div>
            <UserContext.Provider value={name}>
                <div>상단 메뉴</div>
                <Profile />

            </UserContext.Provider>
            <button onClick={() => setName('Alice')}>앨리스인데요</button>
        </div>
    )
}

const Profile = React.memo(() => {
    return (
        <div>
            <Greeting />
        </div>
    )
})

function Greeting() {
    return (
        <UserContext.Consumer>
            {username => <p>{`${username}님 안녕하세요`}</p>}
        </UserContext.Consumer>
    )
}

export default ContextApi
