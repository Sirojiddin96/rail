import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <Wrapper>
                <div className="main-container">
                    <div className="header-container">
                        <img className="logo" src="https://image.winudf.com/v2/image1/Y29tLmF4b25sb2dpYy51enJhaWx3YXlfaWNvbl8xNTcxMDE5ODE1XzA3Mg/icon.png?w=170&fakeurl=1" alt="Logo"/>
                        <h1>O'zbekiston Temir Yo'llari</h1>
                        <h2>Shaxsiy sahiga kiring</h2>
                    </div>
                    <hr />
                    <div className="LoginForm">
                        <label>Email pochtangiz</label>
                        <input className="input" type="mail" name="mail" placeholder="Email pochtangizni kiriting"/>
                        <label>Parol:</label>
                        <input  className="input" type="password" name="password" placeholder="maxfiy kodni kiriting"/>
                        <button className="login-btn">Kirish</button>
                    </div>
                    <div className="login-footer-container">
                        <Link style={{textDecoration:'none',color:'black'}}><p>Parolni unutdingizmi?</p></Link> 
                        <Link style={{textDecoration:'none',color:'black'}}><p>A'zo bo'lish</p></Link> 
                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default Login;

const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    position:relative;
    .main-container{
        width:25%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        background-color:lightblue;
        .logo{
            width:40%; 
        }
        .header-container{
            width:100%;
            height:40%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
        }
        .LoginForm{
            width:100%;
            height:50%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            .input{
                width:85%;
                height:40px;
                outline:none;
                font-size:17px;
                padding-left:10px;
            }
            .login-btn{
                width:89%;
                height:40px;
                outline:none;
                font-size:20px;
                margin-top:10px;
                background-color:salmon;
                border:1px solid gray;
                cursor: pointer;
            }
        }
        .login-footer-container{
            width:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
        }
}
`