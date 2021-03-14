import React from "react";
import StoreContext from "./../../../storeContext";

import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type MyPostsType = {
    // store: any
}

const MyPostsContainer = (props: MyPostsType) => {

    // const state = props.store.getState()

    return (
        <StoreContext.Consumer>
            {store => {
            const state = store.getState()
            const addPost = () => {
                store.dispatch(addPostActionCreator())
                store.dispatch(updateNewPostActionCreator(''))
            }
            const onPostChange = (text: string) => {
                let action = updateNewPostActionCreator(text)
                store.dispatch(action)
            }
            return <MyPosts posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     updateNewPostText={onPostChange}
                     addPost={addPost}/>}}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer