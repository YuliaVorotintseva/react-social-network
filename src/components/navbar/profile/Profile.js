import React from 'react'
import styleClasses from './Profile.module.css'
import Posts from './posts/Posts'
import CreateMessage from '../../../ui/CreateMessage'
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/Creators'

const Profile = ({posts, profileText, dispatch}) => (
    <div className={styleClasses.Profile}>
        <div className={styleClasses.Design} />
        <div className={styleClasses.Avatar}>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/1789050/85fb3978-b7cb-4f26-833a-3079cdb98906/s1200'
                alt='User'
            />
        </div>

        <p className={styleClasses.Posts}>Posts</p>

        <CreateMessage
            text={profileText}
            dispatch={dispatch}
            updateActionCreator={updateTextActionCreator}
            addActionCreator={addPostActionCreator}
        />

        <Posts
            posts={posts}
            dispatch={dispatch}
        />
    </div>
)

export default Profile
