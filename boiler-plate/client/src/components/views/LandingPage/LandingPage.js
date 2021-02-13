import axios from 'axios'
import React from 'react'
import {withRouter} from 'react-router-dom'

function LandingPage(props) {

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {
            console.log("aaaa : ", response.data)
            if(response.data.success) {
                props.history.push('/login')
            } else {
                alert("로그아웃 하는데 실패했습니다.")
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '100vh'
        }}>
            <h2>
                시작 페이지
            </h2>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

// history가 react-router-dom을 사용해서
export default withRouter(LandingPage);