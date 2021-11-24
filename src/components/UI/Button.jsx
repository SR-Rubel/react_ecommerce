import React from 'react'

function Button({
    text="button",
    cls="btn-outline-primary",
    width= "",
    height="",
    bgcolor="",
    color="",
}) {

    const style={
        width:width,
        height:height,
        background:bgcolor,
        color:color
    }

    return (
        <button className={"btn "+cls} style={style}>
            {text}
        </button>
    )
}

export default Button
