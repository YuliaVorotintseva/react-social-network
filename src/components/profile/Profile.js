import React from 'react'
import styleClasses from './Profile.module.css'

const Profile = () => (
    <div className={styleClasses.Profile}>
        <img src='https://avatars.mds.yandex.net/get-pdb/985790/453d00bf-6999-41ed-b0bf-a8bc310ac9ca/s1200?webp=false' />
        <img src='https://avatars.mds.yandex.net/get-pdb/1789050/85fb3978-b7cb-4f26-833a-3079cdb98906/s1200' />

        <div className={styleClasses.Posts}>
            <h2>Posts</h2>
            <div className={styleClasses.Item}>
                post 1
            </div>
            <div className={styleClasses.Item}>
                post 2
            </div>
            <div className={styleClasses.Item}>
                post 3
            </div>
        </div>
    </div>
)

export default Profile
