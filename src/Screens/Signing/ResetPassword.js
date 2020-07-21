import React, { Component } from 'react';
import styled from "styled-components"
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
    constructor(props){
        super(props);

        this.state={
            fields:{},
            errors:{}
        }
    }
    handleValidation=()=>{
        let fields=this.state.fields;
        let errors={};
        let formIsValid=true

            //Mail
        if(!fields["email"]){
            formIsValid=false;
            errors["email"]="Elektron pochtada xatolik mavjud"
        }
        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Mail mavjud emas";
              }
            }
        //Password
        if(!fields["password"]){
            formIsValid=false;
            errors["password"]="Maxfiylikda xato mavjud"                
        }

        this.setState({errors: errors});
        return formIsValid;
    }

        onSubmitHandler=(event)=>{
            event.preventDefault()
            if(this.handleValidation()){
                console.log("Logged")
            }else{
                console.log("Has arror")
            }
        }
        handleChange(field, e){    		
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
          }
    render() {
        return (
            <Wrapper>
                <div className="main-container">
                    <div className="header-container">
                        <img className="logo" src="https://image.winudf.com/v2/image1/Y29tLmF4b25sb2dpYy51enJhaWx3YXlfaWNvbl8xNTcxMDE5ODE1XzA3Mg/icon.png?w=170&fakeurl=1" alt="Logo"/>
                        <h2>AKSIADORLIK JAMIYATI</h2>
                        <h1>O'zbekiston Temir Yo'llari</h1>
                        <h2>Shaxsiy sahiga kiring</h2>
                    </div>
                    <hr />
                    <div className="LoginForm" onSubmit={this.onSubmitHandler}>
                        <div className="inner-label-container">
                        <div className="label-container">
                        <label>Parol:</label>
                        <input  
                        className="input" 
                        type="password" 
                        placeholder="maxfiy kodni kiriting"
                        ref="password"
                        size="30" 
                        onChange={this.handleChange.bind(this, "password")}
                        value={this.state.fields["password"]}
                        />
                         <span style={{color: "red",fontSize:'14px'}}>{this.state.errors["password"]}</span>
                        </div>
                        <div className="label-container"> 
                        <button className="login-btn" onSubmit={this.onSubmitHandler}>Kirish</button>
                        </div>
                    </div>
                    </div>
                    <div className="login-footer-container">
                        <Link  className="footer" to="/"><p>Parolni unutdingizmi?</p></Link> 
                        <Link  className="footer" to="/Register"><p>A'zo bo'lish</p></Link> 
                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default ResetPassword;

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
        background-color:white;
        margin-top:10px;
        position:fix;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);
        .logo{
            width:40%; 
            margin-top:5px; 
        }
        .header-container{
            width:100%;
            height:30%;
            display:flex;
            flex-direction:column;
            align-items:center;
            text-align:center;
            justify-content:space-around;
        }
        .LoginForm{
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around;
            .inner-label-container{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:space-around;
            }
            .label-container{
                width:80%;
                display:flex;
                flex-direction:column;
                align-items:left;
                justify-content:space-around;
                margin-top:10px;
                .input{
                    width:95%;
                    height:40px;
                    outline:none;
                    font-size:17px;
                    padding:0 0 0 10px;
                    margin-top:5px;
                    border:1px solid lightgray;
                }
                .login-btn{
                    width:100%;
                    height:40px;
                    outline:none;
                    font-size:20px;
                    margin-top:10px;
                    background-color:royalblue;
                    color:white;
                    font-weight:700;
                    border:1px solid gray;
                    cursor: pointer;
            }
            }
             
        }
        .login-footer-container{
            width:80%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-around;
            .footer{
                font-size:17px;
                font-weight:700;
                color:black;
                text-decoration:none;
            }
        }
}
`