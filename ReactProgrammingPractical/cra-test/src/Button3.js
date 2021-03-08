import React from 'react';
import style from './Button3.module.scss';
import cn from 'classnames'

export default function Button({size}) {
    if(size === 'big') {
        return <button className={cn(style.button, style.big)}>큰 버튼</button>;
    } else {
        return <button className={cn(style.button, style.small)}>작은 버튼</button>;
    }
}

console.log(style);