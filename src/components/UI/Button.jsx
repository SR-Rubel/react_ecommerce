import React from 'react'

function Button({
    cls="btn-outline-primary",
    width= "",
    height="",
    bgcolor="",
    color="",
    children
}) {

    const style={
        width:width,
        height:height,
        background:bgcolor,
        color:color
    }

    return (
        <button className={"btn "+cls} style={style}>
            {children}
        </button>
    )
}

export default Button
