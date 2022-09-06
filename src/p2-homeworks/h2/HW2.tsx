import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "./Affairs.module.css"
// import ArgsType = jest.ArgsType;

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType = { _id: number, name: string, priority: AffairPriorityType } // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    else if (filter === 'high') {
        return affairs.filter(affair => affair.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(affair => affair.priority === 'middle')
    } else return affairs.filter(affair => affair.priority === 'low')// need to fix
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    let newAffairs = affairs.filter(affair => affair._id !== _id); // need to fix
    return newAffairs.map((affair, index) => { //добавил сортировку
        affair._id = index + 1
        return affair
    })
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <>
            <hr/>
            homework 2
            <div className={s.HW2}>

                {/*should work (должно работать)*/}
                <table>
                    <Affairs
                        data={filteredAffairs}
                        setFilter={setFilter}
                        deleteAffairCallback={deleteAffairCallback}
                    />
                </table>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeAffairs/>*/}
            </div>
        </>
    )
}

export default HW2
