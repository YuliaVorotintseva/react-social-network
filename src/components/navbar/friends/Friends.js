import React from 'react'
import styleClasses from './Friends.module.css'
import Friend from './friend/Friend'
import StoreContext from '../../../StoreContext'

const Friends = () => {
    return (
        <StoreContext.Consumer>
            {
                value => (
                    <div className={styleClasses.Friends}>
                        {value.state.dialogs.items.map(({id, avatar, name}) => <Friend key={id} avatar={avatar} name={name} />)}
                    </div>
                )
            }
        </StoreContext.Consumer>
    )
}

export default Friends
