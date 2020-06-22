import React from 'react'
import styleClasses from './Dialogs.module.css'
import CreateMessagesContainer from './messages/CreateMessagesContainer'
import CreateItemsContainer from './items/CreateItemsContainer'

const Dialogs = () => {
    return (
        <div className={styleClasses.Dialogs}>
            <CreateItemsContainer />
            <CreateMessagesContainer />
        </div>
    )
}

export default Dialogs
