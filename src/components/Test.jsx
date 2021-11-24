import React from 'react'
import './Test.scss'

function Test() {
    return (
        <div className="responsive_image">
            <img src={ process.env.PUBLIC_URL +"img/juice4.png"} alt="image"/>
        </div>
    )
}

export default Test
