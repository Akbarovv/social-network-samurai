import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {
    posts: ProfilePageType
    addPost: (message: string)=> void
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts} addPost={props.addPost}
            newPostText={props.posts.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;