import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsTypes, ProfilePageType, } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {
    posts: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts.posts}
                     dispatch={props.dispatch}
                     newPostText={props.posts.newPostText}
                     />
        </div>
    )
}
export default Profile;