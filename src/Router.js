import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'


//import screens
import Main from './Screens/index'
import Login from './Screens/Signing/Login'
const Router=()=>{
    return(
        <BrowserRouter>
                <Route exact path="/" component={Main}/>
                <Route exact path="/Login" component={Login}/>
        </BrowserRouter>

    )
}
export default Router;