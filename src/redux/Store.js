let renderTree = () => {}

export const subscribe = observer => {
    renderTree = observer
}

export const store = {
    state: {
        dialogs: {
            items: [
                {
                    name: 'Slava',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '1'
                },
                {
                    name: 'Misha',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '2'
                },
                {
                    name: 'Sasha',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: '3'
                }
            ],
            messages: [
                {
                    message: 'JavaScript',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 1
                },
                {
                    message: 'React',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 2
                },
                {
                    message: 'Redux',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 3
                },
                {
                    message: 'Vue',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 4
                },
                {
                    message: 'Angular',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 5
                },
                {
                    message: 'NodeJS',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    id: 6
                }
            ]
        },
    
        profile: {
            posts: [
                {
                    message: 'Hello!',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    likes: 100,
                    dislikes: 0,
                    id: 1
                },
                {
                    message: 'React',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    likes: 157,
                    dislikes: 2,
                    id: 2
                },
                {
                    message: 'Redux',
                    avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
                    likes: 146,
                    dislikes: 7,
                    id: 3
                }
            ],
            profileText: ''
        }
    },

    addPost() {
        let message = this.state.profile.profileText
        this.state.profile.posts.push({
            message,
            avatar: 'https://avatars.mds.yandex.net/get-pdb/195449/0642142b-b08f-414f-b34d-ca70e6586c2a/s1200?webp=false',
            likes: 0,
            dislikes: 0,
            id: Math.random()
        })
        this.state.profile.profileText = ''
        renderTree()
    },

    updateText(message) {
        this.state.profile.profileText = message
        renderTree()
    },

    updateLikes(id, type) {
        const posts = this.state.profile.posts.slice(0, this.state.profile.posts.length)
        const currentPost = posts.find( e => e.id === id)
    
        if(type === '+') ++currentPost.likes
        else ++currentPost.dislikes
    
        this.state.profile.posts = posts
        renderTree()
    }
}
