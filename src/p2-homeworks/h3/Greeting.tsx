import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : s.notAnError

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <SuperInputText value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       placeholder={"input username here..."}/>
                <SuperButton disabled={Boolean(error)}
                        className={s.btn}
                        onClick={addUser}>Add user
                </SuperButton>
            </div>
            <div className={s.errorMsgContainer}>
                <span className={s.errorMsg}>{error}</span>
            </div>
            <div className={s.counterContainer}>
                <span>Total users count: {totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
