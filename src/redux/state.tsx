export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newTextElement: string) => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    _renderEntireTree: () => void
    getState: () => RootStateType

}
export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi how are you", likesCount: 12},
            ],
            newPostText: "Asadbek"
        },
        messagePage: {
            dialogs: [
                {id: 1, name: "Java"},
                {id: 2, name: "Asa"},
                {id: 3, name: "Bob"},
            ],
            messages: [
                {id: 1, message: "Yo"},
                {id: 2, message: "Yo"},
                {id: 3, message: "Yo"},
            ]
        }


    },
    updateNewPostText(newTextElement: string) {
        this._state.profilePage.newPostText = newTextElement
        this._renderEntireTree();
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },
    addPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._renderEntireTree();
    },
    _renderEntireTree() {
        console.log('console is changed')
    },
    getState() {
        return this._state
    }
}

