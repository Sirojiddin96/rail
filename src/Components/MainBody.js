import React, { Component } from 'react';
import styled from 'styled-components'

class MainBody extends Component {
    render() {
        const {images}=this.props;
        const {notes}=this.props
        return (
            <Wrapper>
                <MainHeader>
                        <h1>O'zbekistonning mashhur manzilgohlari</h1>
                        <div className="inner-container">
                        {images.map((image,index)=>{
                            return  <div className="images">
                                        <img  className="image" src={image.image} key={index}/>
                                    </div>
                        })}
                          </div>
                        <h1>Yo'lovchilarga eslatma</h1>
                        <div className="middle-contaier">
                            {notes.map((note,index)=>{
                                return  <div className="notes">
                                        <img className="note-images" src={note.image} key={index}/>
                                         <span> bilet xarid qilish yo'li</span>
                                    </div>
                            })}
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
