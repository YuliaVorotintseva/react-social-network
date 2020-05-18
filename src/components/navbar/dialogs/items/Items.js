import React from 'react'
import styleClasses from './Items.module.css'
import Item from './item/Item'

const items = [
    {name: 'Slava', id: '1'},
    {name: 'Misha', id: '2'},
    {name: 'Sasha', id: '3'}
]

const Items = () => {
    return (
        <div className={styleClasses.Items}>
            <Item name='Slava' id='1' />
            <Item name='Misha' id='2' />
            <Item name='Sasha' id='3' />
        </div>
    )
}

export default Items
