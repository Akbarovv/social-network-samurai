import {ChangeEvent} from "react";

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
    _renderEntireTree: () => void
    // updateNewPostText: (newTextElement: string) => void
    subscribe: (observer: () => void) => void
    // addPost: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export const addPostActionCreator = () => ({
        type: 'ADD-POST'
    }as const)

export const updateNewPostActionCreator = (newText: string) => ({
        type: "UPDATE-NEW-POST-TEXT", newTextElement: newText
    }as const)



export  type ActionsTypes =  ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostActionCreator>
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
    _renderEntireTree() {
        console.log('console is changed')
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 5,
                message: this.getState().profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._renderEntireTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            debugger
            this._state.profilePage.newPostText = action.newTextElement
            this._renderEntireTree();
        }
    }
}

