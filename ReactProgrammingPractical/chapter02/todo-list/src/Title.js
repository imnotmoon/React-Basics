import React, { useState } from 'react'

function Title(props) {
    return (
        <p>{props.title}</p>
    )
}

export default React.memo(Title)
