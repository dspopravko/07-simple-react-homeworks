import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const newName = event.target.value.replace(/\s/g, '')

        if (newName.length > 3) {
            setName(newName)
            setError('')
        } else {
            setName(newName)
            setError("Username should be at least 4 characters long!")
        }
    } // need to fix
    const addUser = () => {
        if (!error && name) {
            if (users.some(u => u.name == name)) {
                setError("Username already exists!")
            } else {
                addUserCallback(name)
                //alert(`Hello ${name}!`) // need to fix
                console.log(`Hello ${name}!`)
            }
        } else {
            setError("Username should be at least 4 characters long!")
        }
    }
    console.log(typeof(name))
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
