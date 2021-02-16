import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void

}
const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <HashRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={() => <Dialogs dialogs={state.messagePage}/>}/>
                    <Route path='/profile' render={() => <Profile posts={state.profilePage}
                                                                  dispatch={props.dispatch}
                                                                  />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </HashRouter>
    )
}
export default App;
