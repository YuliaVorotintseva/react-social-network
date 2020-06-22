import React from 'react'
import styleClasses from './Items.module.css'
import Item from './item/Item'

const Items = ({items}) => (
    <div className={styleClasses.Items}>
        {items.map(({name, id}) => <Item key={id} name={name} id={id} />)}
    </div>
)

export default Items
