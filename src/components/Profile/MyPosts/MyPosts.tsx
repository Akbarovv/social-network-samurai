import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post";
import {PostsType} from "../../../redux/store";

type MyPostsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: any
    addPost: any
}

const MyPosts = (props: MyPostsType) => {

    const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        debugger
        const text = newPostElement?.current?.value
        props.updateNewPostText(text)

    }
    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea
                            ref={newPostElement}
                            value={props.newPostText}
                            onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>

            </div>
        </div>)
}
export default MyPosts