import {combineReducers, createStore} from "redux";
import messagePageReducer from "./message-page-reducer";
import profileReducer from "./profile-reducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messagePageReducer

})

export const store = createStore(reducers)