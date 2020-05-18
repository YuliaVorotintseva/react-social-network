import React from 'react'
import styleClasses from './Items.module.css'
import Item from './item/Item'

const Items = () => {
    return (
        <div className={styleClasses.Items}>
            <Item name='Slava' />
            <Item name='Misha' />
            <Item name='Sasha' />
        </div>
    )
}

export default Items
