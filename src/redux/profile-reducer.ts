import {PostsType} from "./store";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: 1, message: "Hi how are you", likesCount: 12},
    ],
    newPostText: "Asadbek"
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newTextElement
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
} as const)
export const updateNewPostActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT, newTextElement: newText
} as const)
export default profileReducer