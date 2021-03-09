import profileReducer, {addPostActionCreator, updateNewPostActionCreator} from "./profile-reducer";
import messagePageReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./message-page-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messagePageReducer(this._state.messagePage, action)
        this._renderEntireTree();

    }
}




