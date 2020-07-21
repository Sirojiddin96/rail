import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'


//import screens
import Main from './Screens/index'
import Login from './Screens/Signing/Login'
import Register from './Screens/Signing/Register'
import Schedule from './Screens/Timtable/Schedule'
import ResetPassword from './Screens/Signing/ResetPassword'
class Router extends React.Component{
     
    render(){
    return(
            <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                    <Route  path="/Login" component={Login}/>
                    <Route  path="/Register" component={Register}/>
                    <Route  path="/Schedule" component={Schedule}/>
                    <Route  path="/ResetPassword" component={ResetPassword}/>
            </BrowserRouter>

        )
    }
}
export default Router;