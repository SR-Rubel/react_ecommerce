import React from 'react'

function Button({
    cls="btn-outline-primary",
    width= "",
    height="",
    bgcolor="",
    color="",
    children,
    onclick
}) {

    const style={
        width:width,
        height:height,
        background:bgcolor,
        color:color
    }

    return (
        <button onClick={onclick} className={"btn "+cls} style={style}>
            {children}
        </button>
    )
}

export default Button
