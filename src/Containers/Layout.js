import React,{Component} from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import MainBody from '../Components/MainBody'
import Footer from '../Components/Footer'


class Layout extends Component{
    render(){
    return(
        <Wrapper>
            <Header/>
           <MainBody/>
           <Footer/>
        </Wrapper>
    )
}
}
export default Layout;

const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    `