import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <div>
        <tr key={a._id}>
            <th className={s.th}>{a._id}.</th>
            <Affair // should work
                key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        </tr>
        </div>
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <>
            {mappedAffairs}
            <div className={s.buttonContainer}> {/*все эти divы и кнопки вызывают ошибки в консоли*/}
                <SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton>
            </div>
        </>
    )
}

export default Affairs
