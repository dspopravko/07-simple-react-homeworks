import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {_id: v1(), name: name}
        setUsers([...users, newUser]) // need to fix
    }
    return (
            <div>
                <hr/>
                homework 3
                {/*should work (должно работать)*/}
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeGreeting/>*/}
                <hr/>
            </div>
)
}
// уровень работы с глобальными данными

export default HW3
