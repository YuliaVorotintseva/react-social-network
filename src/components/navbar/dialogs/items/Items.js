import React from 'react'
import styleClasses from './Items.module.css'
import Item from './item/Item'
import StoreContext from '../../../../StoreContext'

const Items = () => (
    <StoreContext.Consumer>
        {
            ({state}) => (
                <div className={styleClasses.Items}>
                    {state.dialogs.items.map(({name, id}) => <Item key={id} name={name} id={id} />)}
                </div>
            )
        }
    </StoreContext.Consumer>
)

export default Items
