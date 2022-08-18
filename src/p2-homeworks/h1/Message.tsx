import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <>
            <div className={s.message}>
                <div className={s.avatar_container}>
                    <img alt="avatar" src={props.avatar}/>
                </div>
                <div className={s.message_container}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.body_container}>
                        <div className={s.text_wrapper}>
                            <p className={s.text}>{props.message}</p>
                        </div>
                        <div className={s.time_container}>
                            <div className={s.time}>{props.time}</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Message
