import React from 'react'
import styleClasses from './Profile.module.css'
import CreatePostContainer from './posts/CreatePostContainer'
import PostsContainer from './posts/PostsContainer'

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

        <CreatePostContainer />
        <PostsContainer />
    </div>
)

export default Profile
