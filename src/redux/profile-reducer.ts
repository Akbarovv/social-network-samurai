import {PostsType, StoreType} from "./state";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'



const profileReducer = (state: any, action: any)  => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.profilePage.posts.push(newPost)
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newTextElement
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