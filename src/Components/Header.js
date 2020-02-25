import React, {Component} from 'react'
import styled from 'styled-components'

class Header extends Component{
    state={
        dropdown:false,
        isOPen:false
    }
    render(){
    return(
        <Wrapper>
            <MainHeader>
                <div className="mainheader" > 
                <div className="left">
                    <div className="logo-contaier">
                        {/* <img className="logo" src="https://image.winudf.com/v2/image1/Y29tLmF4b25sb2dpYy51enJhaWx3YXlfaWNvbl8xNTcxMDE5ODE1XzA3Mg/icon.png?w=170&fakeurl=1" alt="Logo"/> */}
                    </div>
                    <div className="left-container-right"> 
                       <span className="logo-header">AKSIYADORLIK JAMIYATI</span> 
                       <span className="logo-header-second">O'ZBEKISTON TEMIR YO'LLARI</span> 
                </div>
                </div>
                <div className="right">
                    <div className="right-container">
                    <div className="schedule">
                        <li>Poyezdlar jadvali</li> 
                    </div>
                    <div className="languages">
                        <li  style={{listStyle:'none'}}onClick={()=>this.setState({dropdown:!this.state.dropdown})}>Language</li>
                            <div className="dropdown"  style={{height:this.state.dropdown ? 90:0}} >
                                <li className="dropdown-item">O'zbekcha</li>
                                <li className="dropdown-item">English</li>
                                <li className="dropdown-item">Russkiy</li>
                            </div>
                    </div>
                    <div className="login">
                       <li>Login</li>
                    </div>
                </div>
                </div>
                </div>
                <div className="header-form">
                    <h1  className="header-form-first">Chipta Sotib Olish</h1>
                    <h3  className="header-form-second">Jadvalni bilish va chipta sotib olish uchun yo'nalishni va vaqtni tanlang</h3>
                <div className="main-form">
                    <div className="inner-main-form">
                        <input 
                        className="inner-main-form-input"
                        type="text"
                        placeholder="QAYERDAN"
                        />
                        <button className="inner-main-change-btn">change</button>
                        <input 
                        className="inner-main-form-input"
                        type="text"
                        placeholder="QAYERGA"
                        />
                        <input className="inner-main-form-input"
                        type="text"
                        placeholder="VAQT"
                        />
                        <button className="inner-main-form-btn" type="submit">TOPISH</button>
                    </div>
                </div>
                <div className="cities">
                    <ul className="ul-list">
                        <li><img/></li>
                        <li>Toshkent</li>
                        <li>Nukus</li>
                        <li>Samarqand</li>
                        <li>Xiva</li>
                        <li>Buxoro</li>
                        <li>Andijon</li>
                        <li>Qarshi</li>
                        <li>Navoi</li>
                        <li>Jizzax</li>
                        <li>Termiz</li>
                        <li>Gulistan</li>
                        <li>Urganch</li>
                    </ul>
                </div>
                </div>
            </MainHeader>
        </Wrapper>
    )
}
}
export default Header;

const Wrapper=styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    position:relative;
`
const MainHeader=styled.div`
    width:100%;
    height:400px;
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center;
    background-color:darkgrey;
    .mainheader{
        width: 90%;
        height:90px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        border:1px solid gray;
        background-color:skyblue;
    }
    .left{
        width:50%;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-direction:row;
        border:1px solid red;
        margin:5px;
        .logo-contaier{
            width:12%;
            height:80%;
            margin-left:5px;
            border:1px solid gray;
            display:flex;
            flex-direction:column;
            align-items:center;
            background-color:yellow;
        .logo{
            width:90%;
            height:100%;
        }
    }
    .left-container-right{
        width:88%;
        height:90%;
        display:flex;
        flex-direction:column;
        align-items:left;
        border:1px solid gray;
        margin:10px;
        .logo-header{
            font-family:'Segoe UI', sans-serif;
            color:#FFFFFF;
            font-size:16px;
        }
        .logo-header-second{
            font-family:'Segoe UI', sans-serif;
            color:#FFFFFF;
            font-size:22px;
            font-weight:700;
        }
    }

    }
    .right{
        display:flex;
        width:50%;
        height:80px;
        justify-content:space-around;
        flex-direction:row;
        border:1px solid gray;
        margin:5px;
        .right-container{
            width:60%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            margin:0 0 0 245px;
            border:1px solid gray;
            .schedule{
                width:35%;
                height:40px;
                border:1px solid gray;
                display:flex;
                align-items:center;
                justify-content:space-around;
                position: relative;
                list-style:none;
                margin:2px;
                cursor: pointer;
                :hover{
                    background-color:salmon;
                }
            }
                .languages{
                    width:35%;
                    height:40px;
                    border:1px solid gray;
                    display:flex;
                    align-items:center;
                    justify-content:space-around;
                    position: relative;
                    text-decoration:none;
                    margin:2px;
                    cursor: pointer;
                    :hover{
                        background-color:salmon;
                    }
                    .dropdown{
                            position:absolute;
                            width:100%;
                            top:40px;
                            display:flex;
                            background-color:gainsboro;
                            flex-direction:column;
                            align-items:center;
                            overflow:hidden;
                            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
                            -webkit-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                            -moz-box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                            box-shadow: 3px 4px 5px -4px rgba(0,0,0,0.75);
                            list-style:none;
                            .dropdown-item{
                                height:30px;
                                width:100%;
                                outline:none;
                                align-items:center;
                                display:flex;
                                text-align:center;
                                justify-content:space-around;
                                list-style:none;
                                cursor:pointer;
                            }
                            .dropdown-item:hover{
                                background-color:yellow;
                            }
                         }
                    }
                }
        .login{
            width:30%;
            height:40px;
            border:1px solid gray;
            display:flex;
            align-items:center;
            justify-content:space-around;
            position: relative;
            list-style:none;
            text-align:center;
            margin:2px;
            cursor:pointer;
            :hover{
                background-color:salmon;
            }
        }
    }
    .header-form{
        width:80%;
        height:300px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        .header-form-first{
            width:100%;
            height:67px;
            font-family:'Segoe UI', sans-serif;
            color:#FFFFFF;
            font-size:56px;
            font-weight:700;
            text-align:center;
            margin:0;
            padding:0;
        }
        .header-form-second{
            font-family:'Segoe UI', sans-serif;
            color:#FFFFFF;
            font-size:20px;
            font-weight:700;

    }
    .main-form{
        width:100%;
        height:100px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        margin:0;
        padding:0;
        .inner-main-form{
            width:90%;
            height:95px;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            .inner-main-form-input{
                width:30%;
                height:40px;
                border:1px solid lightgray;
                font-size:25px;
                padding:6px 12px;

            }
            .inner-main-form-btn{
                width:30%;
                height:54px;
                border:1px solid lightgray;
                background-color:white;
                font-size:25px;
                padding:6px 12px;
                color:gray;
                cursor: pointer;
                :hover{
                    background-color:darkblue;
                }
            }
            .inner-main-change-btn{
                width:10%;
                height:54px;
                border:1px solid lightgray;
                background-color:white;
                padding:6px 12px;
                color:gray;
                cursor:pointer;
                :hover{
                    background-color:darkblue;
                }
                
                
            }
        }

    }
    .cities{
        width:100%;
        height:100px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        position: relative;
        .ul-list{
            width:80%;
            height:24px;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            list-style:none;
            color:#FFFFFF;
            margin:0px 8px 0px 0px;
            font-size:15px;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
        }
    }
}
`
