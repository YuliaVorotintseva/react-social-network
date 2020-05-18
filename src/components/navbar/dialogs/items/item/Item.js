import React from 'react'
import styleClasses from './Item.module.css'

const Item = ({name, isActive = false}) => {
    let styleClass = styleClasses.Item

    return (
        <div className={styleClass}>
            {name}
        </div>
    )
}

export default Item
