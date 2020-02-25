import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom'


//import screens
import Main from './Screens/index'
const Router=()=>{
    return(
        <BrowserRouter>
                <Route exact path="/" component={Main}/>
                
        </BrowserRouter>

    )
}
export default Router;