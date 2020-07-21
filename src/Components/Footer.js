import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Wrapper>
                <div className="footer">
                    <div className="footer-left">
                    <Link className="footer-link"><h3>Kompaniya haqida</h3></Link>
                    <Link className="footer-link"><h3>Aloqa ma'lumotlari</h3></Link> 
                    <Link className="footer-link"><h3>Foydalanish qoidalari</h3></Link> 
                    </div>
                </div>
                <div className="copyright">
                    <div>
                        <span>2015-2020 AJ "O'ZTEMIRYO'LYO'LOVCHI"</span>
                    </div>
                    <div className="inner-copyright-container">
                        <Link className="footer-link"><h3>Dasturlovchi</h3></Link>
                        <img  src="" alt="logo"/>
                    </div>

                </div>
            </Wrapper>
        );
    }
}

export default Footer;

const Wrapper=styled.div`
    width:95%;
    height:100%;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-around;
    position:relative;
    top:5px;
    .footer{
        width:60%;
        height:100px;
        display:flex;
        .footer-left{
            width:85%;
            display:flex;
            justify-content:space-around;
            flex-direction:row;
            align-items:center; 
            background-color:white;
            .footer-link{
                text-decoration:none;
                color:#007bff;
            }
        }
    }
    .copyright{
            width:40%;
            display:flex;
            justify-content:space-around;
            flex-direction:column;
            border:1px solid gray;
            .inner-copyright-container{
                width:40%;
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:space-around;
            } 
            .footer-link{
                text-decoration:none;
                color:#007bff;
            }
    }
`