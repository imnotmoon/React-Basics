/* eslint-disable import/no-anonymous-default-export */
// AddNumber를 wrapping하는 역할을 하는 컴포넌트
// 꼭 1:1 wrapping일 필요는 없다
// 꼭 리덕스를 대리수행해주기 위해서만 사용되지도 않는다
// 필요한 경우 여러 비즈니스 로직을 처리한다.

import React from 'react'
import AddNumber from '../components/AddNumber'
import store from '../store'

// 리덕스와 일은 얘가 한다.
export default () => {

    const onClick = (number) => {
        store.dispatch({
            type: 'INCREMENT', size: number
        })

    }

    return (
        <AddNumber onClick={onClick} ></AddNumber>)
}


// 잘돌아간다ㅏ. Anonymous 컴포넌트로 잘됨.