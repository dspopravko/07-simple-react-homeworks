import React from 'react'

function Error404() {
    return (
        <div style={{transform: "translate3d(12vw, 40vh, 0)"}}>
            <div style={{fontWeight: "600", fontSize: "4rem"}}>404</div>
            <div>Page not found!</div>
            <img alt={"just a cat gif"} style={{width: "50%"}} src={"https://i.pinimg.com/originals/8f/a8/db/8fa8db7e112b19564ab4ec2466dee396.gif"}/>
        </div>
    )
}

export default Error404
