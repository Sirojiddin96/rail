import React, { Component } from 'react';
import styled from 'styled-components'

class MainBody extends Component {
    render() {
        return (
            <Wrapper>
                <MainHeader>
                        <h1>O'zbekistonning mashhur manzilgohlari</h1>
                        <div className="inner-container">
                             <div className="images">
                                <img  className="image" src="https://live.staticflickr.com/2813/33731445901_a09f0031b3_b.jpg" alt="Samarkand"/>
                            </div>
                            <div className="images">
                                <img  className="image" src="https://www.thebeautifulride.com/img/steps/1/buxoro.jpg" alt="Buxoro"/>
                            </div>
                              <div className="images">
                                <img className="image" src="https://cdn.pixabay.com/photo/2019/10/26/12/40/uzbekistan-4579369_960_720.jpg" alt="Xiva"/>
                            </div>
                            <div className="images">
                                <img className="image"src="https://www.pv.uz/uploads/newspapers/5177a4216714198b087b4d025313e3e2.jpg" alt="Shahrisabz"/>
                            </div>  
                        </div>
                        <h1>Yo'lovchilarga eslatma</h1>
                        <div className="middle-contaier">
                            <div className="notes">
                                <img className="note-images" alt="bilet"/>
                                <span> bilet xarid qilish yo'li</span>
                            </div>
                            <div className="notes">
                                <img className="note-images" alt="general"/>
                                <span>Umimiy ma'lomot</span>
                            </div>
                            <div className="notes">
                                <img className="note-images" alt="Passangers"/>
                                <span>Yo'lovchi tashish qoidalari</span>
                            </div>
                            <div className="notes">
                            <img className="note-images" alt="insurance"/>
                                Sug'urta axborotlari
                            </div>
                            <div className="notes">
                            <img className="note-images" alt="bonus"/>
                                Imtiyozlar va bonuslar
                            </div>
                            <div className="notes">
                            <img className="note-images" alt="most_asked"/>
                                Ko'p so'raladigan savollar
                            </div>
                        </div>
                </MainHeader>
            </Wrapper>
        );
    }
}

export default MainBody;

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
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    align-items:center; 
    background-color:white;
    .inner-container{
        width:95%;
        height:200px;
        display:flex;
        justify-content:space-between;
        .images{
            width:25%;
            height:200px;
            display:flex;
            flex-direction:column;
            align-items:center;
            margin:0 5px 0 5px;
            .image{
                width:95%;
                height:190px;
                margin:5px;
                border:1px solid darkgray;
                border-radius:5px;
            }

        }
    }
    .middle-contaier{
        width:90%;
        height:210px;
        display:flex;
        border:1px solid gray;
        justify-content:space-between;
        .notes{
            width:15%;
            height:200px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-around; 
            border:1px solid gray;
            margin: 5px;
            .note-images{
                width:90%;
                height:150px;
                border:1px solid gray;
               

            }
        } 
    }
`
