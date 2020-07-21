import React, { Component } from 'react'
import Layout from '../Containers/Layout'
import MainBody from '../Components/MainBody'

const images=[
    {
        image:"https://live.staticflickr.com/2813/33731445901_a09f0031b3_b.jpg",
        title:"Samarkand"
    },
    {
        image:"https://www.thebeautifulride.com/img/steps/1/buxoro.jpg",
        title:"Buxoro"
    },
    {
        image:"https://cdn.pixabay.com/photo/2019/10/26/12/40/uzbekistan-4579369_960_720.jpg",
        title:"Xiva"
    },
    {
        image:"https://www.pv.uz/uploads/newspapers/5177a4216714198b087b4d025313e3e2.jpg",
        title:"Shahrisabz"
    }
]
const notes=[
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    },
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    },
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    },
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    },
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    },
    {
        image:"",
        title:"bilet xarid qilish yo'li"
    }
]

class App extends Component{
    render(){
    return(
        <div>
            <Layout>
                <MainBody images={images} notes={notes}/>
            </Layout>
        </div>

    )
}
}
export default App;
