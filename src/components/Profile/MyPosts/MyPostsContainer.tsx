import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

type MyPostsType = {
    // store: any
}


const mapToStateProps = (state: any) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapToStateDispatch = (dispatch: any) => {
    return {
        addPost: () => {
            debugger
            dispatch(addPostActionCreator())
            dispatch(updateNewPostActionCreator(''))
        },
        updateNewPostText: (text: string) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapToStateProps, mapToStateDispatch)(MyPosts);

export default MyPostsContainer