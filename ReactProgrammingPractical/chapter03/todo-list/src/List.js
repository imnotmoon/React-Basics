import { keyframes } from '@emotion/react'
import React, { useState, useEffect } from 'react'

function List() {

    const [todo, setTodo] = useState([])
    const [date, setDate] = useState("")
    // {priority : Number, content : String}

    useEffect(() => {
        setTimeout(() => {
            setDate(Date())
        }, 1000)
    }, [date])


    const onButtonClicked = (e) => {
        const priority = document.getElementById('priority').value
        const content = document.getElementById('content').value
        setTodo([...todo, { priority, content }])
        console.log(todo)
    }

    const removeItem = (e) => {
        console.log(e.currentTarget)
        console.log(this)

    }

    return (
        <div className="list">
            <h3>{date.toString()}</h3>
            <div>
                {todo.map((item, index) => {
                    return (
                        <div className="list__item" key={index}>
                            <p>{item.priority}</p>
                            <p>{item.content}</p>
                            <input type="checkbox" onClick={removeItem}></input>
                        </div>
                    )
                })}
            </div>
            <div className="inputbox">
                <input type="text" placeholder="내용" id="content"></input>
                <select name="priority" id="priority">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={onButtonClicked}>내용 추가</button>
            </div>
        </div >
    )
}

export default List
