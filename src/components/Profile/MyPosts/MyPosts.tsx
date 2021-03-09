import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post";
import {ActionsTypes, PostsType } from "../../../redux/store";
import { addPostActionCreator,updateNewPostActionCreator} from "../../../redux/profile-reducer";

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}

const MyPosts = (props: MyPostsType) => {

    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updateNewPostActionCreator(''))
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostActionCreator(event.currentTarget.value))

    }
    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea
                            value={props.newPostText}
                            onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>

            </div>
        </div>)
}
export default MyPosts