import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
                <SuperButton small className={s.button}  onClick={deleteCallback}>X</SuperButton>
            </td>
        </>
    )
}

export default Affair
