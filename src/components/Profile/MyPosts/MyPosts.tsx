import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post";

import {PostsType,} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostsType>
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newPostText: string) => void
}
const MyPosts = (props: MyPostsType) => {

    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost(props.newPostText)
        props.updateNewPostText('')
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>)=> {
        props.updateNewPostText(event.target.value)



    }
    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea  value={props.newPostText}
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