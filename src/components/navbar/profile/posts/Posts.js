import React from 'react'
import Post from './post/Post'
import styleClasses from './Posts.module.css'

const posts = [
    {
        message: 'Hello!',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
        likes: 100,
        id: 1
    },
    {
        message: 'React',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
        likes: 157,
        id: 2
    },
    {
        message: 'Redux',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
        likes: 146,
        id: 3
    }
]

const Posts = () => (
    <div className={styleClasses.Posts}>
        <Post
            message='Hello!'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
        />

        <Post
            message='React'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
            likes='26'
        />

        <Post
            message='Redux'
            avatar='https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false'
            likes='23'
        />
    </div>
)

export default Posts
