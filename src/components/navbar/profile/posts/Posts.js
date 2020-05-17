import React from 'react'
import Post from './post/Post'
import styleClasses from './Posts.module.css'

const Posts = () => (
    <div className={styleClasses.Posts}>
        <h2>Posts</h2>

        <div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div>
                <button>Remove post</button>
            </div>
        </div>

        <Post
            message='Hello!'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
        />

        <Post
            message='React'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
        />

        <Post
            message='Redux'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
        />
    </div>
)

export default Posts