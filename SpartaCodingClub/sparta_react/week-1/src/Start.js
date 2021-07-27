import React from 'react'

function Start({name}) {
    return (
        <div className="start">
            <div className="texts">
                <p style={{display: 'flex', alignItems:"center", height: "30px"}}>나는 <p className="name">{name}</p>에 대해서</p>
                <p>얼마나 알고 있을까?</p>
            </div>
            <input type="text" className="input-name" placeholder="내이름"/>
            <button>시작하기</button>
        </div>
    )
}

export default Start
