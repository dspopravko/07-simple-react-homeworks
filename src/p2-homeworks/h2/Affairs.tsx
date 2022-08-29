import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <>
            <tr>
                <th>{a._id}.</th>
                <Affair // should work
                    key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                    affair={a}
                    deleteAffairCallback={props.deleteAffairCallback}
                />

            </tr>
        </>
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
        <div>

            {mappedAffairs}
            <div className={s.buttonContainer}>
                <button className={s.button} onClick={setAll}>All</button>
                <button className={s.button} onClick={setHigh}>High</button>
                <button className={s.button} onClick={setMiddle}>Middle</button>
                <button className={s.button} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
