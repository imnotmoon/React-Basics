import React from 'react';
import './Box1.css';

export default function Box({size}) {
    if(size === 'big') {
        return <div className="big box">큰 박스</div>;
    } else {
        return <div className="small box">작은 박스</div>;
    }
}