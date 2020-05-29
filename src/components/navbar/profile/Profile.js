import React from 'react'
import styleClasses from './Profile.module.css'
import Posts from './posts/Posts'
import { addPostActionCreator, updateTextActionCreator, updateLikes } from '../../../redux/Creators'
import MessageContainer from '../../../ui/MessageContainer'

const Profile = () => (
    <div className={styleClasses.Profile}>
        <div className={styleClasses.Design} />
        <div className={styleClasses.Avatar}>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/1789050/85fb3978-b7cb-4f26-833a-3079cdb98906/s1200'
                alt='User'
            />
        </div>

        <p className={styleClasses.Posts}>Posts</p>

        <MessageContainer
            updateActionCreator={updateTextActionCreator}
            addActionCreator={addPostActionCreator}
        />

        <Posts updateLikes={updateLikes} />
    </div>
)

export default Profile
