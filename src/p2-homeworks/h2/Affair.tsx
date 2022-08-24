import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <>
            <td>
                <p>{props.affair.name}</p>
            </td>
            <td>
                <p>{props.affair.priority}</p>
            </td>
            <td>
                <button className={s.button}  onClick={deleteCallback}>X</button>
            </td>
        </>
    )
}

export default Affair
