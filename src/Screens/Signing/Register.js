import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

class Register extends Component {
    constructor(props){
        super(props);
         
        this.state = {
            fields: {},
            errors: {}
        }
    }
    handleValidation=()=>{
        let fields=this.state.fields;
        let errors={};
        let formIsValid=true;
    
    //Name
    if(!fields['name']){
        formIsValid=false;
        errors["name"]="To'liq ismingizni kiriting";
    }
    if(typeof fields["name"]!=="undefined"){
        if(fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid=false;
            errors["name"]="Only letters"
        }
    }
    //Email
    if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Iltimos mail pochtangizni kiriting";
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
        formIsValid = false;
        errors["password"] = "Maxfiylik kodini kiriting";
     }
     if(typeof fields["password"]!=="undefined"){
        if(fields["password"].length<5){
            formIsValid=false;
            errors["password"]="5 tadan ko'p bo'lishi kerak"
        }
    }
    //ConfirmPassword
     //Password
     if(!fields["Confirmpassword"]){
        formIsValid = false;
        errors["Confirmpassword"] = "Maxfiylik ko'di o'xshash emas"
     }
     if(fields["password"]!==fields["Confirmpassword"]){
         formIsValid=false;
         errors["Confirmpassword"]="O'xshash emas"
     }

    this.setState({errors: errors});
    return formIsValid;
}

    onSubmitHandler=(event)=>{
        event.preventDefault()
        if(this.handleValidation()){
            console.log("Form Submitted")
            console.log(this.state.fields)
        }else{
            console.log("Form has error")
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
                    <form className="LoginForm" onSubmit={this.onSubmitHandler}>
                        <div className="inner-label-container">
                        <div className="label-container"> 
                        <label>Email pochtangiz:</label>
                        <input 
                        className="input" 
                        type="text" 
                        ref="email"
                        size="30" 
                        placeholder="Emailni kiriting"
                        onChange={this.handleChange.bind(this, "email")}
                        value={this.state.fields["email"]}
                        />
                        <span style={{color: "red",fontSize:'14px'}}>{this.state.errors["email"]}</span>
                        </div>
                        <div className="label-container">
                        <label>To'liq ism:</label>
                        <input  
                        className="input" 
                        type="name"  
                        placeholder="Enter your name"
                        ref="name"
                        size="30" 
                        onChange={this.handleChange.bind(this, "name")}
                        value={this.state.fields["name"]}
                        />
                         <span style={{color: "red",fontSize:'14px'}}>{this.state.errors["name"]}</span>
                        </div>
                        <div className="label-container">
                        <label>Parolingizni kiriting:</label>
                        <input 
                        className="input" 
                        type="password" 
                        name="password" 
                        placeholder="Parolingizni kiriting"
                        ref="password"
                        size="30" 
                        onChange={this.handleChange.bind(this, "password")}
                        value={this.state.fields["password"]}
                        />
                         <span style={{color: "red",fontSize:'14px'}}>{this.state.errors["password"]}</span>
                        </div>
                        <div className="label-container">
                        <label>Takroran kiriting:</label>
                        <input  
                        className="input" 
                        type="password" 
                        name="password" 
                        placeholder="Takroriy kiriting"
                        ref="password"
                        size="30" 
                        onChange={this.handleChange.bind(this, "Confirmpassword")}
                        value={this.state.fields["Confirmpassword"]}
                        />
                         <span style={{color: "red",fontSize:'14px'}}>{this.state.errors["Confirmpassword"]}</span>
                        </div>
                        <div className="label-container"> 
                        <button className="login-btn" onSubmit={this.onSubmitHandler}>Ro'yhatdan o'tish</button>
                        </div>
                        <Link style={{textDecoration:'none'}} to="Login"><h2>Sizda sahifa bormi?</h2></Link> 
                    </div>
                    </form>
                    <div className="login-footer-container">
                        <Link  className="footer" to="/"><p>Yuridik shaxslarni ro'yxatdan o'tkazish</p></Link>  
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default Register;

const Wrapper=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    position:relative;
    .main-container{
        width:30%;
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
                    height:45px;
                    outline:none;
                    font-size:22px;
                    margin-top:10px;
                    background-color:royalblue;
                    border:1px solid gray;
                    color:white;
                    font-weight:700;
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
                text-align:center;
            }
        }
}
    `