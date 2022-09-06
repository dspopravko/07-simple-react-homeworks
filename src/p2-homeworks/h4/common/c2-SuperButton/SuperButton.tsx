import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    small?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, children, small,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `
        ${(!red && !small) ? s.default : ""}
        ${red ? s.red : ""}
        ${small ? s.small : ""}
        ${(className) ? className : ""}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{children} </button>
    )
}

export default SuperButton
