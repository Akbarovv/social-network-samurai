const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_NEW_MESSAGE_BODY'


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
    newMessageBody: string


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
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export  type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>


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
            ],
            newMessageBody: ""
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
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagePage.newMessageBody = action.body
            this._renderEntireTree();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagePage.newMessageBody
            this._state.messagePage.newMessageBody = ''
            this._state.messagePage.messages.push({id: 5, message: body})
            this._renderEntireTree();
        }
    }
}
export const addPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)
export const updateNewPostActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT", newTextElement: newText
} as const)

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
} as const)

