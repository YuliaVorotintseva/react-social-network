import React from 'react'
import styleClasses from './Item.module.css'
import { NavLink } from 'react-router-dom'

const Item = ({name, id}) => {
    return (
        <div className={styleClasses.Item}>
            <NavLink
                to={`/dialogs/${id}`}
                activeClassName={styleClasses.Active}
            >
                {name}
            </NavLink>
        </div>
    )
}

export default Item
